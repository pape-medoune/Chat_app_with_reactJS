const bcrypt = require('bcrypt');
const Login = (req,res)=>{
    axios.get("mongodb://localhost:27017/chatapp.users")
    .then(data => {
        console.log(data);
        password = req.body.password;
        const match = bcrypt.compare(password, data.password);
        
        if(match) {
            //login
            res.send({
                message: "Connection fait avec succés!";
            })
            res.redirect("/user");
        }
    })
    .catch(err => {
        console.log(err); 
    })

    
}

module.exports = Login;