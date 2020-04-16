const User = require('../models/user');

module.exports = {
    add,
    remove,
    getList
}


async function getList(req, res) {
    try {
        const user = await User.findById(req.user._id);
        res.json(user.wishList);
    }
    catch(err) {
        res.json(err);
    }
}

async function add(req, res) {
    try {
        const user = await User.findById(req.user._id);
        user.wishList.push(req.body);
        user.save(function(err) {
            res.json(user.wishList[user.wishList.length-1])
        })
    } 
    catch(err) {
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