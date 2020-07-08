const { User } = require('../../models');
require('dotenv').config()
module.exports = {
    get: (req, res) => {
      console.log('??')
      let token = req.cookies.token; 
      if(token){
        //권한이 있는 경우
        let decoded = jwt.verify(token, process.env.SECRET_KEY); 
        let memberId = decoded.memberId;
        Users.findOne({where: {memberId: memberId}})
        .then(data => {
          if(memberId==='admin'){
            User.findAll() //{raw: true	}
            .then(data => {
              if(!data){  
                res.status(404);
                res.end('no data');
              } else {  //회원가입이 된 경우
                data = data.map(el => el.get({ plain: true }));
                console.log(data);
                res.status(200).send(data);
                res.end();
            
              }
            })
          }else{
            res.status(401).send('not admin');
            res.end();
          }
          // res.status(200).send(data.dataValues);
          // res.end();
        })
      } else {
        //권한 없는 경우
        res.status(401).send('need user session');
        res.end();
      }


    },

    post: (req, res) => {
      
    }
  };