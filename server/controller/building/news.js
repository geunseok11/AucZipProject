const { News } = require('../../models');
const { read } = require('fs');

module.exports = {
    get: (req, res) => {
        News.findAll({
            attributes: ['title', 'day', 'descriptionUrl', 'imageUrl', 'text']
          })
          .then(data=>{
            if(!data){  
             res.status(404);
             res.end('no news');
            } else { 
              res.status(200)
              res.json(data)
              }
          })
    }

}