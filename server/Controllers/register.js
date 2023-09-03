const { model } = require("mongoose");
const Userdb = require("../Models/users");
const bcrypt = require('bcrypt');

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

module.exports = register;