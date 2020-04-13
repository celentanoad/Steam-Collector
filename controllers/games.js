const User = require('../models/user');
const Game = require('../models/game');

module.exports = {
  create,
  show,
  index
};

async function index(req, res) {
  try{
      const games = await Game.find({});
      res.json(games);
  }
  catch(err){
      res.json(err);
  }
}

async function create(req, res) {
  try {
    const game = await Game.create(req.body);
    console.log(req.body)
    res.json(game);
  }
  catch(err){
    res.json(err);
  }
}

async function show(req, res) {
  try {
    const game = await Game.findById(req.params.id);
    res.json(game);
  }
  catch(err){
    res.json(err)
  }
}

