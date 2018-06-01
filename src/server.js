const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const shortnerRouter = require("./routes/api");

const app = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", shortnerRouter);

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running app on PORT ${port}`);
  }
});

module.exports = app;
