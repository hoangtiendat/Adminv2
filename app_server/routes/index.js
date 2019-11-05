var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.homelist);
router.get('/index', ctrlMain.homelist);
router.get('/users', ctrlMain.users);
router.get('/products', ctrlMain.products);
router.get('/orders', ctrlMain.orders);
router.get('/shops', ctrlMain.shops);
router.get('/edit_user', ctrlMain.edit_user);
router.get('/revenue', ctrlMain.revenue);

module.exports = router;
