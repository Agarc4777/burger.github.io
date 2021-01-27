var orm = require("../models/orm.js");

var burger = {
    // selects all burgers 
    selectAll: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // makes a new burger value
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};
module.exports = burger;