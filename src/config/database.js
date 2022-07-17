const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    database:  process.env.DATABASE,
    host: process.env.HOST,
    password: process.env.PASS,
    port: process.env.PORT,
    user: process.env.USER
})

const tryConection = () => { 
    pool.execute("SELECT NOW()", (err, result) => {
    if(err){
        console.warn(err.sqlMessage);
        return;
    }

    console.log("conectado ao banco!")
})}

tryConection()

module.exports = pool;