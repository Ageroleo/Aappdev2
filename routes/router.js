const express = require('express');
const router = express.Router();
const con = require('../controller/CONtroller');
router.get('/', con.index);
router.get('/about', con.about);
router.get('/contact', con.contact);
router.get('/gallery', con.gallery);
router.get('/shop', con.shop);
module.exports = router; 