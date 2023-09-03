const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/chatapp";

const db = () => {
  mongoose.connect(MONGO_URI)
    .then(() => {
      console.log("Connection to the database was successful");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err.message);
    });
};

module.exports = db;
