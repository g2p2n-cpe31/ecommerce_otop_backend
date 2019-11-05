var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

require('dotenv').config()
var uri = process.env.URL_MONGO

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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('[success] task 1 : listening on port ', port);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("first page of api express");
});

var Product = require("./router/productrouter");
app.use("/v01/api/product", Product);

var Account = require("./router/accountrouter");
app.use("/v01/api/account", Account);

var Store = require("./router/storerouter");
app.use("/v01/api/store", Store);

var Cart = require("./router/cartrouter");
app.use("/v01/api/cart", Cart);

var Payment = require("./router/paymentrouter");
app.use("/v01/api/payment", Payment);

var Order = require("./router/orderrouter");
app.use("/v01/api/order", Order);

var SearchpageSortbyname = require("./router/searchpageSortbynamerouter");
app.use("/v01/api/searchpage/sortbyname", SearchpageSortbyname);

var SearchpageSortbyprice1 = require("./router/searchpageSortbyprice1router");
app.use("/v01/api/searchpage/sortbyprice1", SearchpageSortbyprice1);

var SearchpageSortbyprice_1 = require("./router/searchpageSortbyprice_1router");
app.use("/v01/api/searchpage/sortbyprice_1", SearchpageSortbyprice_1);

var SearchpageSortbysell1 = require("./router/searchpageSortbysell1router");
app.use("/v01/api/searchpage/sortbysell1", SearchpageSortbysell1);

var SearchpageSortbysell_1 = require("./router/searchpageSortbysell_1router");
app.use("/v01/api/searchpage/sortbysell_1", SearchpageSortbysell_1);

var SearchpageSortbyrating1 = require("./router/searchpageSortbysell1router");
app.use("/v01/api/searchpage/sortbyrating1", SearchpageSortbyrating1);

var SearchpageSortbyrating_1 = require("./router/searchpageSortbysell_1router");
app.use("/v01/api/searchpage/sortbyrating_1", SearchpageSortbyrating_1);

var GetProduct = require("./router/getproductrouter");
app.use("/v01/api/getproduct", GetProduct);

app.use((req, res, next) => {
  var err = new Error("path not found");
  err.status = 404;
  next(err);
});