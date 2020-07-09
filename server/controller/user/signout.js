const jwt = require('jsonwebtoken');

module.exports = {
  get: (req, res) => {
    res.clearCookie('token',{path: '/'});
    res.redirect('/');
    res.end();
  }
};
