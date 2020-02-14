//Andres Giesemann
//CS341 HW5

var express = require('express');
var router = express.Router();
var dbms = require('./dbms');


router.post('/', function (req, res) {

    var newEntryTopping = req.body.TOPPING;
    console.log("" + newEntryTopping);

    dbms.dbquery('select count(*) as numEntries from ORDERS;', function (error, result) {
        
        var numEntryString = "" + result.numEntries;
        
    });

    
});

router.get('/', function (req, res) {

    dbms.dbquery('select count(*) as numEntries from ORDERS;', function (error, results) {
        var numResults = results;
        res.send(numResults);
    });

    
});

module.exports = router;