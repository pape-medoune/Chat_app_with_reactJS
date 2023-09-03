const Userdb = require("../Models/users");
const bcrypt = require('bcrypt');
const db = require("../Database/db");
const axios = require("axios");
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://127.0.0.1:27017/chatapp", { useNewUrlParser: true });
const register = (req,res)=>{
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
        const passwordHash = myPlaintextPassword;
        const users = new Userdb({
            prenom: req.body.prenom,
            nom: req.body.nom,
            email: req.body.email,
            password: passwordHash
        });
        users.save(users)
        .then(data =>{
            res.send("Donnée inserer avec succés!");
        })
        .catch(err =>{
            console.log(err);
        })
    }); 
}

const displayUser = (req,res)=>{
    const dbname= "chatapp";
    const dbn = client.db(dbname);

    dbn.collection("users").find().toArray((err,resultat)=>{
        if(!err)
        {
            res.send(resultat.json());
        }
        else
        {
            console.log(`Erreur lors de l'affichage !`)
        }
    })
}

module.exports = {register,displayUser};