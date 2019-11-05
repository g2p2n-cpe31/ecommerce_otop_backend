var express = require("express");
var router = express.Router();
var Account = require("../models/account");

// GET all
router.get("/", (req, res) => {
  Account.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by id
router.get("/:_id", (req, res) => {
  Account.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by username
router.get("/username/:username", (req, res) => {
  const query = {'username': {'$regex': req.params.username }};
  Account.find(query).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  var obj = new Account(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Add success");
  });
});

// PUT (update current data)
router.post("/put/:_id", (req, res) => {
  Account.findByIdAndUpdate(req.params._id, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// DELETE (delete 1 data)
router.post("/delete/:_id", (req, res) => {
  Account.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete success");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Account.findByIdAndUpdate(req.params._id, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Account.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete success");
  });
});

module.exports = router;