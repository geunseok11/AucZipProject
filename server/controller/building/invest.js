const { Buildings } = require('../../models');
const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
const cookie=require('cookie')
require('dotenv').config()

module.exports = {
    post: (req, res) => {
      let token = cookie.parse(req.headers.cookie).token;
      const { money, id} = req.body;
      console.log(money, id, 'money, id')
      //토큰이 있어야 진행
      if(token && money!==undefined && money !== 0 && id){
        let decoded = jwt.verify(token, process.env.SECRET_KEY); 
        let memberId = decoded.memberId;
        //유저정보 있는지 확인
        Users.findOne({where: {memberId: memberId}})
        .then(userdata => {
          if(userdata){
            //빌딩 투자하기 시작
            let user = userdata;
            Buildings.findOne({where: {id:id}})
            .then(bData =>{
              if(bData){
                bData.b_invest += money;
                //넘치면 같게 돈은 먹음..
                if(bData.b_invest > bData.b_invest_goal){
                  money = money - (bData.b_invest - bData.b_invest_goal);
                  bData.b_invest = bData.b_invest_goal;
                }
                user.money -= money;
                user.save().then(() => {
                  //유저정보저장
                }).catch(error => {
                  console.log(error, 'err')
                  res.status(404);
                  res.end('err');
                })
                .then(()=>{
                  bData.save().then((resData) => {
                    //빌딩 돈 증가
                    console.log(resData.b_invest, 'ok');
                    res.status(200).send(resData.dataValues);
                    res.end();
                  }).catch(error => {
                    console.log(error, 'err')
                    res.status(404);
                    res.end('err');
                  })
                })

              }else{
                console.log('no building...')
                res.status(401);
                res.end('no building data');
              }
            })
          }else{
            res.status(401);
            res.end('no user data');
          }
        })

      }else{
        //no token
        res.status(401);
        res.end('no login');
      }
      //빌딩 투자금액을 넣고 투자버튼을 누른다 -> 서버로 빌딩 id, 투자금액을 보낸다 
      //-> 서버에서 빌딩 투자금액 b_invest에 플러스하고 유저의 돈을 차감한다
      // => 그 빌딩 정보 res로 전송

     
    }
}
