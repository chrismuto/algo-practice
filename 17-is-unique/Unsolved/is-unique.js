// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    for (i = 0; i <= arr.length; i++) {
        const checkNum = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            if (checkNum === arr[j]) {
                return false;
            }
        }
    }
    return true;
};
