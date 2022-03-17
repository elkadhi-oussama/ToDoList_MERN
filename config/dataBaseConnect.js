// importation Mongoose
const mongoose = require("mongoose");

//configration de function pour connecter sur la data base

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("database Connected");
  } catch (error) {
    console.log("data base is not connected !!!! ");
  }
};

module.exports = connectDB;
