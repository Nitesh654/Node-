const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);

router.get('/admin-product', adminController.getAdminProducts);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditMyProduct);

module.exports = router;
