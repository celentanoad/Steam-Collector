var Game = require('../models/game');

module.exports = {
  index,
  create
};

async function index(req, res) {
  try{
      const games = await Game.find({});
      res.status(200).json(games);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    const game = await Game.create(req.body);
    res.status(201).json(game);
  }
  catch(err){
    res.status(500).json(err);
  }
}
