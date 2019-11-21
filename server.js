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
app.use(process.env.useProduct, Product);

var Account = require("./router/accountrouter");
app.use(process.env.useAccount, Account);

var Store = require("./router/storerouter");
app.use(process.env.useStore, Store);

var Cart = require("./router/cartrouter");
app.use(process.env.useCart, Cart);

var Payment = require("./router/paymentrouter");
app.use(process.env.usePayment, Payment);

var Order = require("./router/orderrouter");
app.use(process.env.useOrder, Order);

var SearchpageSortbyname = require("./router/searchpageSortbynamerouter");
app.use(process.env.SearchpageSortbyname, SearchpageSortbyname);

var SearchpageSortbyprice1 = require("./router/searchpageSortbyprice1router");
app.use(process.env.SearchpageSortbyprice1, SearchpageSortbyprice1);

var SearchpageSortbyprice_1 = require("./router/searchpageSortbyprice_1router");
app.use(process.env.SearchpageSortbyprice_1, SearchpageSortbyprice_1);

var SearchpageSortbysell1 = require("./router/searchpageSortbysell1router");
app.use(process.env.SearchpageSortbysell1, SearchpageSortbysell1);

var SearchpageSortbysell_1 = require("./router/searchpageSortbysell_1router");
app.use(process.env.SearchpageSortbysell_1, SearchpageSortbysell_1);

var SearchpageSortbyrating1 = require("./router/searchpageSortbysell1router");
app.use(process.env.SearchpageSortbyrating1, SearchpageSortbyrating1);

var SearchpageSortbyrating_1 = require("./router/searchpageSortbysell_1router");
app.use(process.env.SearchpageSortbyrating_1, SearchpageSortbyrating_1);

var GetProduct = require("./router/getproductrouter");
app.use(process.env.useGetProduct, GetProduct);

app.use((req, res, next) => {
  var err = new Error("path not found");
  err.status = 404;
  next(err);
});