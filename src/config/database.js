const mysql = require("mysql2");

const pool = mysql.createPool({
    database: "railway", //seu database
    host: "containers-us-west-76.railway.app", //seu host
    password: "8kM1EPylBuhE5fBhwSyl", //seu password
    port: 5791, //seu port ou porta
    user: "root" //seu root
})

module.exports = pool;