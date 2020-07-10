const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
const cookie=require('cookie')
module.exports = {
  post: (req, res) => {
    console.log(req.body); console.log(req.headers.cookie,'cookie');
    let originalPwd=req.body.password;
    let newPwd=req.body.newPwd;
  // let token = cookie.parse(req.headers.cookie).token 
    // console.log(token);
       let memberId = req.body.memberId
       let password = req.body.password;
          // console.log(token);
    
          Users.findOne({where: {memberId: memberId, password:password}})
          .then(data => {
            if(data){
                Users.update({password:newPwd}, {where: {memberId: memberId}})
                .then(result => {
                    res.status(200).send('password changed');
                    res.end();
                })
                .catch(err => {
                   console.error(err);
                });
      
            }else{
                    //권한 없는 경우
                  res.status(401).send('need user session');
                  res.end();
            }
          })
    // if(token){
    //   //권한이 있는 경우

    //   let decoded = jwt.verify(token, process.env.SECRET_KEY); //export SECRET_KEY='urSecretKey'
    //   //let decoded = jwt.verify(token,'abc'); //secret key
    //   //console.log(decoded);
    //   let memberId = decoded.memberId;
    //   //console.log(email);
    //   Users.findOne({where: {memberId: memberId}})
    //   .then(data => {
    //     if(data.dataValues.password===originalPwd){  
    //         Users.update({password:newPwd}, {where: {memberId: memberId}})
    //         .then(result => {
    //             res.status(200).send('password changed');
    //             res.end();
    //         })
    //         .catch(err => {
    //            console.error(err);
    //         });
        
    //     }
    //   })
    // } else {
    //   //권한 없는 경우
    //   res.status(401).send('need user session');
    //   res.end();
    // }
  }
};