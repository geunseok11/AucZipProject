const { User } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = {
  get: (req, res) => {
    // console.log(req.session);
    let token = req.cookies.token; 
    // console.log(token);
    
    if(token){
      //권한이 있는 경우

      let decoded = jwt.verify(token, process.env.SECRET_KEY); //export SECRET_KEY='urSecretKey'
      //let decoded = jwt.verify(token,'abc'); //secret key
      //console.log(decoded);
      let memberId = decoded.memberId;
      //console.log(email);
      User.findOne({where: {memberId: memberId}})
      .then(data => {
        res.status(200).send(data.dataValues);
        res.end();
      })
    } else {
      //권한 없는 경우
      res.status(401).send('need user session');
      res.end();
    }
  }
};
