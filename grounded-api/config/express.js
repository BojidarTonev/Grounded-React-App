var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");

module.exports = app => {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );

  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  app.use(bodyParser.json());
  app.use(cookieParser());
};

