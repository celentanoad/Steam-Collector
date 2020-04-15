const User = require('../models/user');

module.exports = {
    add,
    // remove
}

async function add(req, res) {
    const user = await User.findById(req.user._id);
    user.wishlist.push(req.body);
    user.save(function(err) {
        res.json(user)
    })
}