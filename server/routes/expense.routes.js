module.exports = (app) => {
  const expense = require("../controller/expense.controller");
  const router = require("express").Router();
  router.get("/", expense.findAll);
  app.use("/api/expense", router);
};
