const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const wishlistCtrl = require('../../controllers/wishlist');


router.use(require('../../config/auth'));
router.get('/', checkAuth, wishlistCtrl.getList);
router.post('/', checkAuth, wishlistCtrl.add);
router.delete('/:id', checkAuth, wishlistCtrl.remove);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;