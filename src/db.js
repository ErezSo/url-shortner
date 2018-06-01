const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

dotenv.load();
mongoose.connect(process.env.SECRET_KEY);
