const { Buildings } = require('../../models');

module.exports = {
    get: (req, res) => {
        Buildings.findAll({
            attributes: ['id', 'b_name', 'image', 'b_evaluation', 'b_invest', 'b_invest_goal', 'b_invest_user_num',
        'b_info', 'b_location', 'b_use', 'b_size', 'b_due', 'b_views', 'b_invest_start_date',
        'b_invest_end_date']
          })
          .then(data=>{
            if(!data){  
             res.status(404);
             res.end('no building info');
            } else { 
              res.status(200)
              res.json(data)
              }
          })
    }
}
