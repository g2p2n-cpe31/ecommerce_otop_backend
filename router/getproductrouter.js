var express = require("express");
var router = express.Router();
var Product = require("../models/product");

// GET all
router.get("/", (req, res) => {
  Product.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET all
router.get("/name", (req, res) => {
  Product.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name
router.get("/name/:name", (req, res) => {
  const query = { 'name': { '$regex': req.params.name } };
  Product.find(query).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Product.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbyname/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name }, "total": { "$gte": 1 } };
  Product.find(query).sort({ name: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbytotal1/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name }, "total": { "$gte": 1 } };
  Product.find(query).sort({ total: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbytotal_1/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name }, "total": { "$gte": 1 } };
  Product.find(query).sort({ total: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbyprice1/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name }, "total": { "$gte": 1 } };
  Product.find(query).sort({ price: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbyprice_1/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name }, "total": { "$gte": 1 } };
  Product.find(query).sort({ price: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbyname/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name } };
  Product.find(query).sort({ name: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbytotal1/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name } };
  Product.find(query).sort({ total: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbytotal_1/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name } };
  Product.find(query).sort({ total: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbyprice1/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name } };
  Product.find(query).sort({ price: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbyprice_1/name/:name", (req, res) => {
  const query = { "name": { '$regex': req.params.name } };
  Product.find(query).sort({ price: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbyname/name", (req, res) => {
  const query = { "total": { "$gte": 1 } };
  Product.find(query).sort({ name: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbytotal1/name", (req, res) => {
  const query = { "total": { "$gte": 1 } };
  Product.find(query).sort({ total: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbytotal_1/name", (req, res) => {
  const query = { "total": { "$gte": 1 } };
  Product.find(query).sort({ total: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbyprice1/name", (req, res) => {
  const query = { "total": { "$gte": 1 } };
  Product.find(query).sort({ price: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/avaliable/sortbyprice_1/name", (req, res) => {
  const query = { "total": { "$gte": 1 } };
  Product.find(query).sort({ price: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbyname/name", (req, res) => {
  Product.sort({ name: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbytotal1/name", (req, res) => {
  Product.sort({ total: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbytotal_1/name", (req, res) => {
  Product.sort({ total: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbyprice1/name", (req, res) => {
  Product.sort({ price: 1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 
router.get("/haveall/sortbyprice_1/name", (req, res) => {
  Product.sort({ price: -1 }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

module.exports = router;