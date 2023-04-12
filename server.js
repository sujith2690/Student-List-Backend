const express = require("express");
const mongoose = require('./config/dbConnection')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const cors = require("cors");
const route = require("./routes/route");
const port = 5000;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", route);
app.listen(port, () => console.log("Server is running on port :", port));
module.exports = app;   
