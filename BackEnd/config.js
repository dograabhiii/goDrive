require('dotenv').config()
const mongoose = require("mongoose");
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
  .then(() => console.log("Connected to Atlas!"))
  .catch((err) => console.log(err));
