// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    for (i=0; i < arr.length-1; i++) {
        for (j=0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
    const answer = arr[arr.length-1] * arr[arr.length-2];
    return answer;
};
