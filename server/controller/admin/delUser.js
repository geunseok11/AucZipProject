const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
// const crypto=require('crypto');

module.exports = {
  post: (req, res) => {
    console.log(req.body, 'body')
    let memberId=req.body.memberId
console.log('del in')
    Users.findOne({where: {memberId : memberId}})
    .then((data) => {
      //console.log(data);
      if(!data){  //회원가입이 안된 경우
        res.status(404);
        res.end('unvalid users');
      } else {  //회원가입이 된 경우
        Users.destroy({
          where: {
            memberId: memberId
          }
        })
        .then(result => { //삭제 후 유저 찾아서 보내주기
          Users.findAll({})
          .then(data =>{
            data = data.map(el => el.get({ plain: true }));
            res.status(200).send(data);
            res.end();
          })
        })
        .catch(e =>{
          res.status(404);
          res.end('error');
        })


        }

        // if(data.dataValues.password === password){  //비밀번호 맞는 경우
        //   //회원의 id를 session에 담는다
        //   let payload = {
        //     memberId : memberId
        //   }
        //   let secretKey =process.env.SECRET_KEY;
        //   let options = {
        //     expiresIn: 300  //유효시간 300초
        //   }
        //   jwt.sign(payload, secretKey, options, (err, token) => {
        //     if(err){
        //       res.status(500);
        //       res.end();
        //     } else {
        //       res.status(200).cookie('token', token);
        //       res.json({id: data.dataValues.id});
        //       res.end();
        //     }
        //   })

        // } else {  //비밀번호가 맞지 않은 경우
        //   res.status(404);
        //   res.end('unvalid user');
        // }
      })
  }
};

