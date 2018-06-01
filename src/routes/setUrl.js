const validUrl = require("valid-url");
const fs = require("fs");
const Shortner = require("../models/shortner_models");
const { encode } = require("../services/url_shortner");

const validateUrl = url => !!validUrl.isUri(url);

function setUrl(req, res) {
  const { url } = req.body;
  console.log("url", url);
  const validUrl = validateUrl(url);

  if (validUrl === false) {
    return res.status(400).send("URL is not valid");
  }

  return new Promise((resolve, reject) => {
    return fs.readFile(`${__dirname}/../id.txt`, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  })
    .then(id => {
      const shortUrl = new Shortner({
        _id: id,
        url: req.body.url
      });
      console.log("id", id);

      incrementId(id);
      const encodedId = encode(id);

      // TODO: DB doesn't work at the moment. Need to debug to figure out why. Probably something with the config.
      // Promise.resolve(shortUrl.save())
      //   .then(shortened => {
      res.status(200).send(encodedId);
      //   })
      //   .catch(err => {
      //     console.error(err);
      //     return res.status(400).send("Something went wrong");
      //   });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).send("something went wrong");
    });
}

function incrementId(id) {
  return new Promise((resolve, reject) => {
    const newId = (parseInt(id, 10) + 1).toString();
    return fs.writeFile(`${__dirname}/../id.txt`, newId, err => {
      if (err) {
        return reject(err);
      }
      return;
    });
  }).catch(err => {
    console.error(err);
    return res.status(500).send("something went wrong");
  });
}

module.exports = setUrl;
