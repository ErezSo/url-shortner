const Shortner = require("../models/shortner_models");
const { decode } = require("../services/url_shortner");

function goToUrl(req, res) {
  const { urlId } = req.params;
  if (!urlId) {
    return res.status(400).send("Missing url id");
  }

  const decoded = decode(urlId);
}

module.exports = goToUrl;
