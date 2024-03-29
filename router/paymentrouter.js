var express = require("express");
var router = express.Router();
var Payment = require("../models/payment");

// GET all
router.get("/", (req, res) => {
  Payment.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Payment.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by orderId
router.get("/orderId/:orderid", (req, res) => {
  const query = {'orderId': {'$regex': req.params.orderid }};
  Payment.find(query).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  var obj = new Payment(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Add success");
  });
});

// PUT (update current data)
router.post("/put/:_id", (req, res) => {
  Payment.findByIdAndUpdate(req.params._id, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// DELETE (delete 1 data)
router.post("/delete/:_id", (req, res) => {
  Payment.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete success");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Payment.findByIdAndUpdate(req.params._id, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Payment.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete success");
  });
});

module.exports = router;