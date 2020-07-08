const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
const cookie=require('cookie')

module.exports = {
  get: (req, res) => {
    // console.log(req.session);
    let token = cookie.parse(req.headers.cookie).token
    // console.log(token);
    console.log(token)
    if(token){
      //권한이 있는 경우

      let decoded = jwt.verify(token, process.env.SECRET_KEY); //export SECRET_KEY='urSecretKey'
      //let decoded = jwt.verify(token,'abc'); //secret key
      //console.log(decoded);
      let memberId = decoded.memberId;
      //console.log(email);
      Users.findOne({where: {memberId: memberId}})
      .then(data => {
        res.status(200)
        res.json({name:data.dataValues.name, email:data.dataValues.email, 
          phone:data.dataValues.phone, address:data.dataValues.address,
          money:data.dataValues.money,bankName:data.dataValues.bankName,bankNum:data.dataValues.bankNum});
        res.end();
      })
    } else {
      //권한 없는 경우
      res.status(401).send('need user session');
      res.end();
    }
  }
};
