require("../connection/mongo");
const express = require("express");
const router = express.Router();
const expense = require("../models/expense");

router.get("/expense", async (req, res) => {
  try {
    const data = await expense.find();
    res.send({ data: data });
  } catch (error) {
    res.send(error);
  }
});

router.get("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await expense.find({ uid: id });
    res.send({ data: data });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await expense.deleteOne({ _id: id });
    res.send({ data: data });
  } catch (error) {
    res.send(error);
  }
});

router.put("/expense/:id", async (req, res) => {
  try {
    const { title, uid, category, amount, note } = req.body;
    const payload = await expense.updateOne({
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

router.post("/expense", async (req, res) => {
  try {
    const { title, uid, category, amount, note } = req.body;
    const payload = await expense.create({
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
