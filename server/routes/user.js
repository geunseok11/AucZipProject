const express = require('express');
const router = express.Router();

const { userController } = require('../controller');

// * POST /user/signin
router.post('/signin', userController.signin.post);

// * POST /user/signout
router.get('/signout', userController.signout.get);

// * POST /user/signup
router.post('/signup', userController.signup.post);

// * GET /user/info
router.get('/info', userController.info.get);

router.post('/info', userController.info.post);

router.post('/pwd', userController.pwd.post);

router.post('/googleSignin', userController.googleSignin.post);

module.exports = router;
