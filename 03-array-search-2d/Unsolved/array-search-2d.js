// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    var array = arr.join('').replaceAll(',', '');
    var count = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === "X") {
            count = count + 1;
            console.log(count);
        }
    }
    return(count);
};
