const { mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    prenom : {
        type: String,
        required:true
    },
    nom : {
      type: String,
      required:true
    },
    email:{
        type: String,
        unique: true,
        required:true 
    },
    password: {
        type: String,
    }

});

const Userdb = mongoose.model('users',schema);

module.exports = Userdb;