const request = require("request-promise");
const regularRequest=require('request');
const cheerio=require("cheerio");
const Nightmare=require("nightmare");
const nightmare=Nightmare({show:false});  // show browser
const fs=require('fs');

const { Buildings } = require('../models');

String.prototype.replaceAll = function(A, B) {
   return this.split(A).join(B);
}

const sampleResult={
    casenum:"2019-8252",
    use:'[아파트]',
    location:'서울 노원구 상계동  1128번지  극동늘푸른아파트 101동 ...',
    size:'토지 41.6㎡ / 건물 84.51㎡',
    evaluation:'472,000,000',
    min:'472,000,000',
    status:'변경',
    due:'2020.07.06',
    views:'376',
    descriptionUrl:'https://auction.realestate.daum.net/v15/view.php?Tget=1001522304109102030480215223040011&mstjong=%BE%C6%C6%C4%C6%AE&kmtime=1000&from=detail&subMenuIdx=1&p_=addr1=%EC%84%9C%EC%9A%B8ANDresult=99ANDyongdo=99ANDyongdo_detail=99ANDsort=13D',
    imageUrl: "https://auction.realestate.daum.net/ta_image/mulgun/105/2019/10520190008252001001.jpg",
    summary: '...'
};

async function scrape(){
   //  const result=await request.get('https://auction.realestate.daum.net/v15');
   //  const $=await cheerio.load(result);

    await nightmare.goto('https://auction.realestate.daum.net/v15/')
      

    const result = await nightmare.evaluate(() => {
      return document.body.innerHTML;   // result gets the body of the page
    });
    const $=await cheerio.load(result);
    // const movies=$("td.titleColumn >a").map((i, element)=>{
    //     return $(element).text();
    // })
    // .get();
    const items=$('table > tbody > tr')
       .map((i, element)=>{
           const casenum=$(element)
              .find('td.no_bdL_check_new>a').text()
              
           const use=$(element)
              .find('td.bottom9_new > div.ac_box > a > p.used') 
              .text();   
           const location=$(element)
              .find('td.bottom9_new > div.ac_box > a > p.address') 
              .text();
           const size=$(element)
              .find('td.bottom9_new > div.ac_box > p.area > span') 
              .text();
           const evaluation=$(element)
              .find('td.price_new > div.mapList_price.price_icon1 > p') 
              .text();
           const min=$(element)
              .find('td.price_new > div.mapList_price.price_icon2 > p') 
              .text();
           const status=$(element)
              .find('td.auctioned_new > div > p:nth-child(1) > span') 
              .text();
           const due=$(element)
              .find('td.auctioned_new > div > p:nth-child(3) > span') 
              .text();
           const views=$(element)
              .find('td.auctioned_new > div > p:nth-child(4)') 
              .text();
              
           const descriptionUrl=$(element)
           .find('td.bottom9_new > div.ac_box > a')
           .attr('onclick')

           return {casenum, use, location, size, evaluation, min, status, due, views, descriptionUrl};
       })
       .get()
    return items;
}

async function replaceProcess(items){
   for(let i=0 ; i<items.length ; i++){
      if(items[i].descriptionUrl===undefined) continue;
      items[i].descriptionUrl='https://auction.realestate.daum.net/v15/'+items[i].descriptionUrl.replace("goDetail('/auction/", '')
      items[i].descriptionUrl=items[i].descriptionUrl.substring(0, items[i].descriptionUrl.length-3)
   }
   return items;
}

async function scrapeImageUrl(items){
    for(let i=0 ; i<items.length ; i++){
       if(items[i].descriptionUrl===undefined) continue;
        try{
            const imageUrl=await nightmare.goto(items[i].descriptionUrl)
            .evaluate(()=>
            $('#vcWrap > div.vcContentWrap > div.vcContent1.vcContent > div > div.vcPhotoOne > div > div > img').attr('src')
            )
          items[i].imageUrl=imageUrl;

          const summary=await nightmare.goto(items[i].descriptionUrl)
            .evaluate(()=>
            $('#view_ex_form0').text()
            )
          items[i].summary=summary;
         //  saveImage(items[i]);
          console.log(items[i])
        } catch(err){
            console.error(err);
        }
    }
    await nightmare.end()
    return items;
}

async function saveImage(item){
    regularRequest
    .get(item.imageUrl)
    .pipe(fs.createWriteStream(`items/${item.casenum}.png`))
}

async function auctionScraper(){
    let items=await scrape();
    items=await replaceProcess(items)
    items=await scrapeImageUrl(items);
    
//     Buildings.destroy({
//       where: {},
//       truncate: true
//  })

 for(let i=0 ; i<items.length ; i++){
   Buildings.findOne({where: { b_name: items[i].casenum }}) 
   .then((data) => {
     if(data){
      if(!items[i].evaluation) items[i].evaluation=0;
      if(items[i].evaluation) items[i].evaluation=Number(String(items[i].evaluation).replaceAll(',','') )
      Buildings.update({image:items[i].imageUrl, b_evaluation:items[i].evaluation, b_invest_goal:items[i].evaluation*1.2, 
         b_info:items[i].summary, b_location:items[i].location, b_use:items[i].use, b_size:items[i].size, b_due:items[i].due,
          b_views:items[i].views}, {where: {b_name: items[i].casenum }})
      .then(result => {
         console.log(`Buildings ${items[i].casenum} info updated`);
      })
      .catch(err => {
         console.error(err);
      });
     } 
     else {
      if(!items[i].evaluation) items[i].evaluation=0;
      if(items[i].evaluation) items[i].evaluation=Number(String(items[i].evaluation).replaceAll(',','') )
      Buildings.create({b_name:items[i].casenum, image:items[i].imageUrl, 
         b_evaluation:items[i].evaluation, b_invest_goal:items[i].evaluation*1.2 ,b_info:items[i].summary, 
         b_location:items[i].location, b_use:items[i].use, b_size:items[i].size, b_due:items[i].due,
          b_views:items[i].views})
      .then((data, err) => {
        if(err) console.log('building scraping insertion error')
        else console.log('building scraped')
      });
     }
   })
 }
}
auctionScraper();
