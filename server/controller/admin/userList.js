const { User } = require('../../models');

module.exports = {
    get: (req, res) => {
      console.log('??')
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
    },

    post: (req, res) => {
      
    }
  };