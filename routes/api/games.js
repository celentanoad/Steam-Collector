const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');

/*------------------------------ Public Routes ------------------------------*/


/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', gamesCtrl.index);
router.post('/', gamesCtrl.create);
router.get('/:id', gamesCtrl.show);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
