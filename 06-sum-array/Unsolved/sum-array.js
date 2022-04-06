// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    var added = 0;

    for (i = 0; i < arr.length; i++) {
        var current = arr[i];
        added = added += current;
    }
    return added;
};
