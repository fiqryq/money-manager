const express = require("express");
const incomeController = require("../controller/incomeController");
const expenseContoller = require("../controller/exspenseController");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(incomeController);
app.use(expenseContoller);

app.get("/", (req, res) => {
  res.send({ message: "welcome" });
});

app.listen(port);
