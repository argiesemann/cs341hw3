//Andres Giesemann
//CS341 HW3

//this code was taken directly from the assignment specification

const sum = require('../public/javascript/sum.js');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
}); 