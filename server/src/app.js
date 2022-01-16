const express = require("express");
const pemasukanController = require("../controller/pemasukanController");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(pemasukanController);

app.listen(port);
