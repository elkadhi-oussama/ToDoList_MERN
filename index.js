//For clear the Terminal
console.clear();
//import cors
const cors = require("cors");
// import express Js
const express = require("express");
const app = express();

//import dotenv
require("dotenv").config();
// importation de la function de connection data base
const connectDB = require("./config/dataBaseConnect");
// importation PORT from env file
const PORT = process.env.PORT;
//call the function database
connectDB();
//middlware
app.use(express.json());
app.use(cors());
//importation routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/todo", todoRoutes);
// configuration de serveur  et PORT
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("server is running on " + PORT);
});
