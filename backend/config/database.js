const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.dbUrl);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
  }
};

dbConnect();
