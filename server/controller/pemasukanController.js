require("../connection/mongo");
const express = require("express");
const router = express.Router();
const pemasukan = require("../models/pemasukan");

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post("/pemasukan", async (req, res) => {
  try {
    const { title } = req.body;
    const payload = await pemasukan.create({
      title,
    });
    if (payload) res.send({ message: "success add data" });
    else res.send({ message: "failed send" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
