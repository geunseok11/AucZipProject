const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
// const crypto=require('crypto');

module.exports = {
  post: (req, res) => {
    //client 구글 로그인 callback으로 받아 실행
    const { memberId, email, name } = req.body;
    if(memberId === undefined){
      res.status(404);
      res.end('undefinded memberId');
    }
    Users.findOne({where: {memberId : memberId}})
    .then(data => {
      if(!data){  //회원가입이 안된 경우 자동회원가입
        //임의로 비밀번호 생성
        let password = String(Math.floor(Math.random()*1000000))
        Users.create({name, memberId, password, email})
        .then((data) => { 
          // console.log(data, 'data created!!!!')
          makeToken(memberId)
          .then(token =>{
            res.status(200).cookie('token', token);
            res.json({id: data.dataValues.id});
            res.end();
          })
          .catch(e => {
            console.log(e, 'err is')
            res.status(500);
            res.end();
          })
          // res.status(200).send('signup completed');
          // res.end();
        })
        .catch(e=>{
          res.status(404);
          res.end('create user error');
        })
      } else {  //회원가입이 된 경우
          //회원의 id를 session에 담는다
          makeToken(memberId)
          .then(token =>{
            res.status(200).cookie('token', token);
            res.json({id: data.dataValues.id});
            res.end();
          })
          .catch(e => {
            res.status(500);
            res.end();
          })
      }
    })
    //token발급
    function makeToken(memberId){
      return new Promise((resolve, reject) => {
        let payload = {
          memberId : memberId
        }
        let secretKey =process.env.SECRET_KEY;
        console.log(secretKey, 'key')
        let options = {
          expiresIn: 300  //유효시간 300초
        }
        jwt.sign(payload, secretKey, options, (err, token) => {
          if(err){
            reject(err)

          } else {
            resolve(token)

          }
        })
      });

    }
  }
};

