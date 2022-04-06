// Write code to return the largest number in the given array

var maxNum = function(arr) {
var max = 0;
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
};
