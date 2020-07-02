const jwt = require('jsonwebtoken');

module.exports = {
  post: (req, res) => {
    res.clearCookie('token',{path: '/'});
    res.redirect('/');
    res.end();
  }
};
