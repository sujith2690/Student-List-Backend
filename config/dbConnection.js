const dotenv = require('dotenv')
const mongoose = require("mongoose");
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;
connection
  .on("connected", () => console.log("Database is connected successfully!"))
  .on("error", (err) => console.log("Database connection failed", err));