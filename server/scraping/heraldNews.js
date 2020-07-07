// crontab -e
// whicnnode=$(which node)
// croncmd="$whichnode heraldNews.js"
// crontab "10 2 * * * $croncmd  // every 2.10am

const { News } = require('../models');

const request = require("request-promise");
const regularRequest=require('request');
const cheerio=require("cheerio");
const Nightmare=require("nightmare");
const nightmare=Nightmare({show:false});  // show browser
const fs=require('fs');

const sampleResult={
    title:"HUG, 아동·청소년을 위한 그룹홈 리모델링 지원",
    day:"2020-07-06 15:04",
    text:'...',
    descriptionUrl: 'http://biz.heraldcorp.com/view.php?ud=20200706000757',
    imageUrl: "http://res.heraldm.com/content/image/2020/02/14/20200214000472_0.jpg"
};

async function scrape(){
   //  const result=await request.get('');
   //  const $=await cheerio.load(result);

    await nightmare.goto('http://biz.heraldcorp.com/list.php?ct=010301000000')
      

    const result = await nightmare.evaluate(() => {
      return document.body.innerHTML;   // result gets the body of the page
    });

    // const result=await request.get('http://biz.heraldcorp.com/list.php?ct=010301000000');
    

    const $=await cheerio.load(result);
    // const movies=$("td.titleColumn >a").map((i, element)=>{
    //     return $(element).text();
    // })
    // .get();
    const items=$('div.list > ul > li')
       .map((i, element)=>{
           const title=$(element)
              .find('a > div > div.list_t1.ellipsis').text()
              
           const day=$(element)
              .find('a > div > div.list_t3') 
              .text();   
              
           const descriptionUrl=$(element)
           .find('a')
           .attr('href')

           return {title, day, descriptionUrl};
       })
       .get()
    return items;
}

async function urlProcess(items){
   for(let i=0 ; i<items.length ; i++){
      if(items[i].descriptionUrl===undefined) continue;
      items[i].descriptionUrl='http://biz.heraldcorp.com/'+items[i].descriptionUrl
   }
   return items;
}

async function scrapeImageUrl(items){
    for(let i=0 ; i<items.length ; i++){
       if(items[i].descriptionUrl===undefined) continue;
        try{
            const imageUrl=await nightmare.goto(items[i].descriptionUrl)
            .evaluate(()=>
            $('#heraldbizimg01').attr('src')
            )
          items[i].imageUrl=imageUrl;

          const text=await nightmare.goto(items[i].descriptionUrl)
            .evaluate(()=>
            $('#articleText').text()
            )
          items[i].text=text

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

async function newsScraper(){
    let items=await scrape();
    items=await urlProcess(items)
    items=await scrapeImageUrl(items);
    
    News.destroy({
        where: {},
        truncate: true
   })

   for(let i=0 ; i<items.length ; i++){
   News.create({title : items[i].title, day : items[i].day, descriptionUrl : items[i].descriptionUrl,
    imageUrl : items[i].imageUrl, text : items[i].text})
        .then((data, err) => {
          if(err) console.log('news scraping insertion error')
          else console.log('news scraped')
        });
   }
}

newsScraper();