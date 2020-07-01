const { users } = require('../../models');
const crypto=require('crypto');

module.exports = {
  post: (req, res) => {
    let name=req.body.name
    let memberid=req.body.memberid
    let password=req.body.password
    let email=req.body.email
    let phone=req.body.phone
    let address=req.body.address

    const secret='signupsalt';
    const hash=crypto.createHmac('sha256', secret)
                     .update(password)
                     .digest('base64')

    users.findOne({where: { memberid: memberid }}) //다른 사용자와 이메일이 겹치면 안됨
    .then((data) => {
      if(data){
        res.status(409).send('Already exists ID');
        res.end();
      } else {
        users.create({name, memberid, password : hash, email, phone, address})
        .then((data) => {
          res.status(200).send('signup completed');
          res.end();
        });
      }
    });
  }
};
