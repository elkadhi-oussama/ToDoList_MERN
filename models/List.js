//importation de mongoose
const mongoose = require("mongoose");
//creation de schema
const schema = mongoose.Schema;
const ListSchema = new schema({
  title: { type: String },
  completed: { type: Boolean },
});

module.exports = mongoose.model("list", ListSchema);
