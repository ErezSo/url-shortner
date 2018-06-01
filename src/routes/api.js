const express = require("express");
const setUrl = require("../services/setUrl");
const goToUrl = require("../services/goToUrl");

const router = express.Router();

router.route("/set_url").post(setUrl);
router.route("/:shortUrl").post(goToUrl);

const errorsMiddleware = (err, req, res, next) => {
  console.error(err.message); // eslint-disable-line no-console
  const errorStatus = err.statusCode || 500;
  res.status(errorStatus).send(err.message);
  next(err);
};

module.exports = router;
module.exports.errorsMiddleware = errorsMiddleware;
