// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    var finalArray = [];
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                finalArray.push(arr1[i]);
                j = arr2.length -1;
            }
        }
    }
    console.log(finalArray);
    return finalArray;
};
