// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function(digits) {
    let numberDigits = 0;
    for (i = 0; i < digits.length; i++) {
        numberDigits = numberDigits + (digits[i] * (10 ** (digits.length-1-i)));
    }
    numberDigits = numberDigits + 1;
    let stringDigits = numberDigits.toString();
    for (i = 0; i < stringDigits.length; i ++) {
        digits[i] = parseInt(stringDigits[i]);
    }
    return digits;
};
