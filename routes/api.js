var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/categories/', controllers.api_category_controller.index);

module.exports = router;
