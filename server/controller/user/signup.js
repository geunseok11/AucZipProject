const { User } = require('../../models');
// const crypto=require('crypto');

module.exports = {
  post: (req, res) => {
    let name=req.body.name
    let memberId=req.body.memberId
    let password=req.body.password
    let email=req.body.email
    let phone=req.body.phone
    let address=req.body.address
    console.log(req.body, 'body')
    // const secret='signupsalt';
    // const cipher=crypto.createCipher('aes-256-cbc', secret)
    //                  .update(password, 'utf8', 'base64')+cipher.final('base64')
                     

    User.findOne({where: { memberId: memberId }}) //다른 사용자와 아이디 겹치지 않게
    .then((data) => {
      if(data){
        res.status(409).send('Already exists ID');
        res.end();
      } else {
        User.create({name, memberId, password, email, phone, address})
        .then((data) => {
          res.status(200).send('signup completed');
          res.end();
        });
      }
    });
  }
};
