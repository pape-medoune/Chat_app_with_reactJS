const express = require("express");
const PORT = 4400;
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require('helmet');
const app = express();
const db = require("./Database/db.js");

db();

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Les méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'] // Les en-têtes autorisés
}));

app.use(helmet());

const cspConfig = {
  directives: {
    defaultSrc: ["'self'", "http://localhost:4400"],
    imgSrc: ["'self'", "http://localhost:4400"],
  },
};

app.use(helmet.contentSecurityPolicy(cspConfig));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
  next()
})

app.use(bodyParser.json())
app.use(express.json());




app.listen(PORT,()=>{
    console.log(`Bonjour votre server s'est connecté au port ${PORT}`);
});