//Andres Giesemann
//CS341 HW4

var express = require('express');
var router = express.Router();

/* GET sample order. */
router.get('/', function (req, res, next) {

    var orderList = [
        { topping: "cherry", quantity: "2" },
        { topping: "plain", quantity: "6" },
        { topping: "chocolate", quantity: "3"}
    ];

    res.send(JSON.parse(JSON.stringify(orderList)));
});

module.exports = router;
