# URL Shortner

URL Shortner is a RESTful Express.js service, that recieves a valid URL and returns a shortened functional URL.

The POST endpoint /set_url expects to recieve a body with a parameter of "url" with its value as a valid full URL. The endpoint return the ID that combines with the domain will result in a functionl short version of the original URL.

The GET endpoint /goto_url/:urlId expects to recieve a query parameter of the ID that was revieced from the POST endpoint.

### Setting up

Watermrker requires [Node.js](https://nodejs.org/) v6.4+ to run.

After installing Node.js run:

```sh
$ npm install
```

In order to use the service first create a mongoDB hosting account and a collection (possible in [mLab](https://mlab.com/) - [Quick start guide](http://fredrik.anderzon.se/2017/01/17/setting-up-a-free-mongodb-database-on-mlab-and-connecting-to-it-with-node-js/)).
Create a .env file in the project an assign the secret access key to a SECRET_KEY variable.

Example:

```sh
SECRET_KEY=mongodb://<dbuser>:<dbpassword>@dsxxxxxx.mlab.com:49207/watermarker
```

### Run the service

```sh
$ npm start
```

### Run the service locally

```sh
$ npm run dev
```

### Run unit tests

```sh
$ npm test
```
