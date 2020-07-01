const express = require('express');
const router = express.Router();

const { boardController } = require('../controller');

// * GET /board
router.get('/', boardController.get);

// * POST /board
router.post('/', boardController.post);

module.exports = router;
