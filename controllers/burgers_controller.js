// dependencies
var express = require('express');

// router for the app
var router = express.Router();

// file from models folder
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
})
 
// adds a new burger
router.post("/api/burger", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.params.burger_name, req.params.devoured
    ], function(result) {
        res.json({id: result.insertId});
    });
});

// updates burger status to "devoured"
router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        };
    });
});

module.exports = router;