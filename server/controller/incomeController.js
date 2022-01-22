require("../connection/mongo");
const express = require("express");
const router = express.Router();
const income = require("../models/income");

router.get("/income", async (req, res) => {
  try {
    const data = await income.find();
    res.send({ data: data });
  } catch (error) {
    res.send(error);
  }
});

router.get("/income/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await income.find({ uid: id });
    res.send({ data: data });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/income/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await income.deleteOne({ _id: id });
    res.send({ data: data });
  } catch (error) {
    res.send(error);
  }
});

router.put("/income/:id", async (req, res) => {
  try {
    const { title, uid, category, amount, note } = req.body;
    const payload = await income.updateOne({
      uid,
      title,
      category,
      amount,
      note,
    });
    if (payload) res.send({ message: "success update data" });
    else res.send({ message: "failed send" });
  } catch (error) {
    res.send(error);
  }
});

router.post("/income", async (req, res) => {
  try {
    const { title, uid, category, amount, note } = req.body;
    const payload = await income.create({
      uid,
      title,
      category,
      amount,
      note,
    });
    if (payload) res.send({ message: "success add data" });
    else res.send({ message: "failed send" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
