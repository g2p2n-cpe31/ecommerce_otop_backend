var express = require("express");
var router = express.Router();
var Store = require("../models/store");

// GET all
router.get("/", (req, res) => {
  Store.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Store.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET by name
router.get("/username/:name", (req, res) => {
  const query = {'name': {'$regex': req.params.name }};
  Store.find(query).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  var obj = new Store(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Add success");
  });
});

// PUT (update current data)
router.post("/put/:_id", (req, res) => {
  Store.findByIdAndUpdate(req.params._id, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// add (update current data)
router.post("/addtoset/:_id", (req, res) => {
  Store.findByIdAndUpdate(req.params._id, { $addToSet: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// pop (update current data)
router.post("/popfromset/:_id", (req, res) => {
  Store.findByIdAndUpdate(req.params._id, { $pop: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// DELETE (delete 1 data)
router.post("/delete/:_id", (req, res) => {
  Store.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete success");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Store.findByIdAndUpdate(req.params._id, { $set: req.body }, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update success");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Store.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete success");
  });
});

module.exports = router;