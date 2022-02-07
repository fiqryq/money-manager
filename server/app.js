const express = require("express");
const app = express();
const port = 3000;
require("./config/mongo");
require("./routes/expense.routes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "welcome to money manager app",
  });
});

app.listen(port);
