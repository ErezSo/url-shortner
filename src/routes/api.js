const express = require("express");
const setUrl = require("./setUrl");
const goToUrl = require("./goToUrl");

const router = express.Router();

router.route("/set_url").post(setUrl);
router.route("/:urlId").post(goToUrl);

const errorsMiddleware = (err, req, res, next) => {
  console.error(err.message); // eslint-disable-line no-console
  const errorStatus = err.statusCode || 500;
  res.status(errorStatus).send(err.message);
  next(err);
};

module.exports = router;
module.exports.errorsMiddleware = errorsMiddleware;
