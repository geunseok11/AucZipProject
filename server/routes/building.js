const express = require('express');
const router = express.Router();

const { buildingController } = require('../controller');

router.get('/', buildingController.get);

router.post('/', buildingController.post);

module.exports = router;
