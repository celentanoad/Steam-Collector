const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const wishlistCtrl = require('../../controllers/wishlist');


router.post('/', wishlistCtrl.add);

module.exports = router;