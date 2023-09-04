// const bcrypt = require('bcrypt');
// const Login = (req,res)=>{
//     axios.get("mongodb://localhost:27017/chatapp.users")
//     .then(data => {
//         console.log(data);
//         password = req.body.password;
//         const match = bcrypt.compare(password, data.password);
        
//         if(match) {
//             //login
//             res.send({
//                 message: "Connection fait avec succés!";
//             })
//             res.redirect("/user");
//         }
//     })
//     .catch(err => {
//         console.log(err); 
//     })

    
// }

// module.exports = Login;

const bcrypt = require('bcrypt');
const MongoClient  =  require("mongodb").MongoClient();

const Login = (req,res)=>{
   db = client.db("chatapp");

   db.collection("users").find().toArray().then(
    (err,data)=>{
        if(err){

            console.log("erreur lors de l'affichage !" );
            password = req.body.password;
        const match = bcrypt.compare(password, data.password); 
        if(match && (req.body.email === data.email)) {
            //login
            res.send({
                message: "Connection fait avec succés!";
            })
            
            res.redirect("/user");
        }
        }else{
            res.send(data.json());
        }
    }
   )
    
}

module.exports = Login;