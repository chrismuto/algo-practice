// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    if (num < 0) {
        return false;
    }
    for (i = 0; i <= num; i++) {
        if (num === 0) {
            return true;
        }
        if (num/i === i) {
            return true;
        }
        if (i === num) {
            return false;
        }
    }
};
