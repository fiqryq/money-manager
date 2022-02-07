require("dotenv").config();
const mongoose = require("mongoose");
const connection = process.env.MONGODB;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connection);
  console.log("connect to databases");
}
