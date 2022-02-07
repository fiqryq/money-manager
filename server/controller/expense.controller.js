const expense = require("../models/expense");
exports.findAll = (req, res) => {
  expense
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
