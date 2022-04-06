// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    var count0 = 0;
    var count1 = 0;
    const array = str.split('');
    for (i = 0; i <= array.length; i++) {
        if (array[i] === '0') {
            count0 = count0 + 1;
        }
        if (array[i] === '1') {
            count1 = count1 + 1;
        }
    }
        if (count0 === count1) {
            return true;
        } else {
            return false;
        }
};
