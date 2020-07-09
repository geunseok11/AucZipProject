const express = require('express');
const router = express.Router();

const { adminController } = require('../controller');

// * GET /board
// router.get('/', adminController.get);
// // * POST /board
// router.post('/', adminController.post);
router.get('/userList', adminController.userList.get);

router.post('/delUser', adminController.delUser.post);

module.exports = router;
