const Userdb = require("../Models/users");
const bcrypt = require('bcrypt');
const axios = require("axios");

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
    // axios.get("mongodb://127.0.0.1:27017/chatapp.users")
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log(err); 
    // })

    Userdb.find().toArray()
    .then(data => {
        res.send(data.json());
    })
    .catch(err => {
        console.error(`Erreur lors de l'affichage : ${err}`); 
    })

    // res.send("Affichage de nos données !")

}

module.exports = {register,displayUser};