const User = require('../models/user');

module.exports = {
    add,
    remove
}

async function add(req, res) {
    console.log('add function');
    try {
        const user = await User.findById(req.user._id);
        console.log(user)
        user.wishList.push(req.body);
        user.save(function(err) {
            res.json(user.wishList[user.wishList.length-1])
        })
    } 
    catch(err) {
        console.log(err)
            res.json(err)
    }
    
}

async function remove(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const deletedGame = user.wishList.id(req.params.id);
        const idx = user.wishList.indexOf(deletedGame);
        user.wishList.splice(idx, 1);
        user.save(function(err) {
            res.json(user)
        })
    }
    catch(err) {
        res.json(err)
    }
}