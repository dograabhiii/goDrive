require('dotenv').config();
const mongoose = require("mongoose");

const dbURI = process.env.MONGO_URI;

console.log("Attempting to connect to DB..."); // Log check karne ke liye

mongoose.connect(dbURI)
  .then(() => {
      console.log("✅ Success: Connected to Atlas!");
  })
  .catch((err) => {
      console.log("❌ MongoDB Connection Error!");
      console.log("Error Name:", err.name);
      console.log("Error Message:", err.message);
      // Agar IP issue hoga toh yahan 'MongooseServerSelectionError' dikhayega
  });