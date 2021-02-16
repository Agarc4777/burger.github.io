var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'B055p0w3r!',
     database: 'burgers_db',
    });
};

connection.connect();
module.exports = connection;

// https://fathomless-escarpment-65723.herokuapp.com/ | https://git.heroku.com/fathomless-escarpment-65723.git
// https://agarc4777.github.io/burger.github.io/