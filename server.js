const express = require("express");
require('./config/dbConnection')
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
