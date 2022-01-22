const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  amount: {
    type: Number,
  },
  note: {
    type: String,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const income = mongoose.model("income", incomeSchema);
module.exports = income;
