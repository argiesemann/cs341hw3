//Andres Giesemann
//CS341 HW4

var express = require('express');
var router = express.Router();

/* part 1: GET */
router.get('/', function (req, res) {

    var orderList = [
        { topping: "cherry", quantity: "2" },
        { topping: "chocolate", quantity: "6" },
        { topping: "plain", quantity: "3"}
    ];

    res.send(JSON.parse(JSON.stringify(orderList)));
});

/* part 2: POST */
router.post('/', function (req, res) {

    var orderList = [
        { topping: "cherry", quantity: "2" },
        { topping: "chocolate", quantity: "6" },
        { topping: "plain", quantity: "3"}
    ];

    res.send(JSON.parse(JSON.stringify(orderList)));
});

module.exports = router;
