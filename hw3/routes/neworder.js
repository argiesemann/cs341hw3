//Andres Giesemann
//CS341 HW5

var express = require('express');
var router = express.Router();
var dbms = require('./dbms');

//neworder's post. req contains a JSON with order information
//inserts new order into the database
router.post('/', function (req, res) {

    //extract order information as strings
    var newEntryTopping = "" + req.body.TOPPING;
    var newEntryQuantity = "" + req.body.QUANTITY;
    var newEntryNotes = "" + req.body.NOTES;

    //hardcode values that aren't provided
    var newEntryMonth = "NOV";
    var newEntryDay = "20";

    //count the number of orders to generate a unique order ID
    //note: only works as long as rows don't get deleted
    dbms.dbquery('select count(*) as numEntries from ORDERS;', function (error, result) {
        
        var uniqueID = result[0].numEntries;
        var uniqueIDString = "" + uniqueID;

        //SQL query to insert this info
        dbms.dbquery('insert into ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) values(' 
                    + uniqueIDString + ', "' + newEntryMonth + '", ' + newEntryDay + ', ' 
                    + newEntryQuantity + ', "' + newEntryTopping + '", "' + newEntryNotes + '");', 
                    function(ignore, ignore){}
        );

        
    });

    
});

//get for testing the functionality of a "select count(*)" call
router.get('/', function (req, res) {

    dbms.dbquery('select count(*) as numEntries from ORDERS;', function (error, results) {
        var numResults = results;
        res.send(numResults);
    });

    
});

module.exports = router;