const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: String,
    type: String,
    status: {type: String, enum: ["Completed", "Currently Playing", "Not Yet Played"]},
    rating: {type: String, enum: ["1", "2", "3", "4", "5"]},
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Game', gameSchema);
