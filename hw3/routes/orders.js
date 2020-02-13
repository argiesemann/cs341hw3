//Andres Giesemann
//CS341 HW4

var express = require('express');
var router = express.Router();
var dbms = require('./dbms');

/* part 1: GET */
router.get('/', function (req, res) {

    var orderList = [
        { TOPPING: "cherry", QUANTITY: "2" },
        { TOPPING: "chocolate", QUANTITY: "6" },
        { TOPPING: "plain", QUANTITY: "3"}
    ];

    res.send(orderList);
});

/* part 2: POST */
router.post('/', function (req, res) {

    /*var month = req.body.text;
    console.log("" + month);

    dbms.dbquery('select * from ORDERS where MONTH=' + month + ';', function (error, results) {
        var orderList = results;
        res.send(orderList);
    });*/

    var defaultOrder = [
        { TOPPING: "cherry", QUANTITY: "2" },
        { TOPPING: "chocolate", QUANTITY: "6" },
        { TOPPING: "plain", QUANTITY: "3" }
    ];

    res.send(defaultOrder);
});

module.exports = router;
