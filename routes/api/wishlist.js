const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const wishlistCtrl = require('../../controllers/wishlist');


router.use(require('../../config/auth'));
router.post('/', wishlistCtrl.add);
router.delete('/:id', wishlistCtrl.remove);

module.exports = router;