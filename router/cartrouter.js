var express = require("express");
var router = express.Router();
var Cart = require("../models/cart");

// GET all
router.get("/", (req, res) => {
  Cart.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Cart.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by userid
router.get("/userId/:userid", (req, res) => {
  const query = { 'userId': { '$regex': req.params.userid } };
  Cart.find(query).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by username
router.get("/username/:username", (req, res) => {
  const query = { 'username': { '$regex': req.params.username } };
  Cart.find(query).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  var obj = new Cart(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Add success");
  });
});

// PUT (update current data)
router.post("/put/:_id", (req, res) => {
  Cart.findByIdAndUpdate(req.params._id, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// PUT (update current data)
router.post("/put/userId/:userid", (req, res) => {
  Cart.findOneAndUpdate({ 'userId': req.params.userid }, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// PUT (update current data)
router.post("/addtoset/userId/:userid", (req, res) => {
  Cart.findOneAndUpdate({ 'userId': req.params.userid, 'store.storeId': 'aaaa'}, { $addToSet: {'store': req.body} }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// DELETE (delete 1 data)
router.post("/delete/:_id", (req, res) => {
  Cart.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete success");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Cart.findByIdAndUpdate(req.params._id, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Cart.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete success");
  });
});

module.exports = router;