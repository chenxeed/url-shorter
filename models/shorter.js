const mongoose = require('mongoose');

const ShorterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  url: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = ShorterSchema