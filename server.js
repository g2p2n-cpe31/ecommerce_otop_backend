var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

require('dotenv').config()
var uri = process.env.URL_MONGO
var port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("first page of api express");
});

var Product = require("./productrouter");
app.use("/v01/api/product", Product);

app.use((req, res, next) => {
  var err = new Error("path not found");
  err.status = 404;
  next(err);
});