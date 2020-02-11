//Andres Giesemann
//CS341 HW4

//this tests the functionality of part 1 of HW4
//it sends a GET to /orders and checks the contents of
//the incoming JSON 


test('test GET for /orders', () => {
    
    const $ = require('jquery');

    $.get('/orders', function(response) {
        var testText = $(response)[0].topping;
        expect(testText).toBe("cherry");
    });
    
});