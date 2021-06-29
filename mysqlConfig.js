const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config({path: './.env'}); //masquage des informations sensibles comme les idantifiants et les mots de passes

//const NAME = process.env.NAME;
//const PASS = process.env.PASS;
//const HOST = process.env.HOST;

const HOST = mysql-saleem51.alwaysdata.net 
const NAME = saleem51@2a00:b6e0:1:210:1::1
const PASS = Tutrouverapa26?
//Connexion à la base de donnée Mysql

const db = mysql.createConnection({
    host     : HOST,
    user     : NAME,
    password : PASS,
    database: 'saleem51_groupomania'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connecté a mysql avec l \'id '  + db.threadId);
});


module.exports = db;
