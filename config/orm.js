var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    };
    return arr.toString();
};


function objToSql(ob) {
    var arr = [];

    // for loop for the keys and pushing the values as a string int arr
    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key+ "="+value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM "+tableInput+";";
        connection.query(queryString, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO "+table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, results) {
            if (err) {
                throw err
            }
            cb(results);

        });
    },
    updateOne: function(){

    },
};

module.exports = orm;