// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
    let position;
    for (let i = 0; i <= arr.length; i++) {
        const element = arr[i];
        if (target === element) {
            position = i;
            return position;
        } else {
            position = -1;
        }
    }
    return position;
};
