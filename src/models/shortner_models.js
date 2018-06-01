const mongoose = require('mongoose');

const shortnerModel = new mongoose.Schema({
  url: { type: String, required: true },
  shortner: { type: String, required: true },
});

module.exports = mongoose.model('Shortner', shortnerModel);