const mongoose = require("mongoose");
const pemasukanSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});
const pegawai = mongoose.model("pemasukan", pemasukanSchema);
module.exports = pegawai;
