const router = require('express').Router();

const IndexController = require('../controllers/index-controller');

router.get('/', IndexController.index);

module.exports = router;

