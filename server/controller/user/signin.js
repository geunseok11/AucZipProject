const { users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = {
  post: (req, res) => {
    let memberId=req.body.memberId
    let password=req.body.password

    users.findOne({where: {memberId : memberId}})
    .then(data => {
      //console.log(data);
      if(!data){  //회원가입이 안된 경우
        res.status(404);
        res.end('unvalid user');
      } else {  //회원가입이 된 경우
        if(data.dataValues.password === password){  //비밀번호 맞는 경우
          //회원의 id를 session에 담는다
          let payload = {
            memberId : memberId
          }
          let secretKey =process.env.SECRET_KEY;
          let options = {
            expiresIn: 300  //유효시간 300초
          }
          jwt.sign(payload, secretKey, options, (err, token) => {
            if(err){
              res.status(500);
              res.end();
            } else {
              res.status(200).cookie('token', token);
              res.json({id: data.dataValues.id});
              res.end();
            }
          })
          // res.status(200).send(data.dataValues);
          // res.end();
        } else {  //비밀번호가 맞지 않은 경우
          res.status(404);
          res.end('unvalid user');
        }
      }
    })
  }
};

