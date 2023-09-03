const mongoose = require("mongoose"); 
const MONGO_URI = "mongodb://localhost:27017/chatapp";


const db = () =>{
    mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Connection à la base de donnée fait successfully");
    })
    .catch((err) =>{
        console.log(err);
    })
}

module.exports = db;
