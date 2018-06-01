const mongoose = require("mongoose");

const shortnerModel = new mongoose.Schema({
  _id: { type: String, required: true },
  url: { type: String, required: true },
  created_at: { type: String, required: false }
});

module.exports = mongoose.model("Shortner", shortnerModel);
