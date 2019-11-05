var express = require("express");
var router = express.Router();
var Searchproduct = require("../models/product");

// GET all
router.get("/", (req, res) => {
  Searchproduct.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET all
router.get("/name", (req, res) => {
  Searchproduct.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name
router.get("/name/:name", (req, res) => {
  const query = { 'name': { '$regex': req.params.name } };
  Searchproduct.find(query).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Searchproduct.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata//region//price///name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata//region//price/:num1/:num2/name/", (req, res) => {
  const query = { "price": { "$gte": req.params.num1, "$lte": req.params.num2 } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata//region/:region/price///name/", (req, res) => {
  const query = { "regions": req.params.region };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata/:cata/region//price///name/", (req, res) => {
  const query = { "catagories": req.params.cata };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata/:cata/region/:region/price///name/", (req, res) => {
  const query = { "catagories": req.params.cata, "regions": req.params.region };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata/:cata/region//price/:num1/:num2/name/", (req, res) => {
  const query = { "catagories": req.params.cata, "price": { "$gte": req.params.num1, "$lte": req.params.num2 }} ;
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata/:cata/region//price///name/:name", (req, res) => {
  const query = { "catagories": req.params.cata , "name": { '$regex': req.params.name } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata//region/:region/price/:num1/:num2/name/", (req, res) => {
  const query = { "regions": req.params.region, "price": { "$gte": req.params.num1, "$lte": req.params.num2 } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata//region/:region/price///name/:name", (req, res) => {
  const query = { "regions": req.params.region , "name": { '$regex': req.params.name } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata//region//price/:num1/:num2/name/:name", (req, res) => {
  const query = { "price": { "$gte": req.params.num1, "$lte": req.params.num2 } , "name": { '$regex': req.params.name } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata/:cata/region/:region/price/:num1/:num2/name/", (req, res) => {
  const query = { "catagories": req.params.cata, "regions": req.params.region, "price": { "$gte": req.params.num1, "$lte": req.params.num2 } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata/:cata/region/:region/price///name/:name", (req, res) => {
  const query = { "catagories": req.params.cata, "regions": req.params.region , "name": { '$regex': req.params.name } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata/:cata/region//price/:num1/:num2/name/:name", (req, res) => {
  const query = { "catagories": req.params.cata, "name": { '$regex': req.params.name }, "price": { "$gte": req.params.num1, "$lte": req.params.num2 } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata//region/:region/price/:num1/:num2/name/:name", (req, res) => {
  const query = { "regions": req.params.region, "name": { '$regex': req.params.name }, "price": { "$gte": req.params.num1, "$lte": req.params.num2 } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name and price between and sort by name
router.get("/cata/:cata/region/:region/price/:num1/:num2/name/:name", (req, res) => {
  const query = { "catagories": req.params.cata, "regions": req.params.region, "price": { "$gte": req.params.num1, "$lte": req.params.num2 }, "name": { '$regex': req.params.name } };
  Searchproduct.find(query).sort({ sell: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

module.exports = router;