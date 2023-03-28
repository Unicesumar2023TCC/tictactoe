const mysql = require('mysql2');
let conect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_tictactoe'
});
module.exports = conect;