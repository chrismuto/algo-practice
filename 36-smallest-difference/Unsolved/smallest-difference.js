// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:

var smallestDifference = function (arr1, arr2) {
    let difference = Infinity;
    let final = [];
    let target1;
    let target2;
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            console.log(difference);
            if (Math.abs(arr1[i] - arr2[j]) < difference) {
                difference = Math.abs(arr1[i] - arr2[j]);
                target1 = arr1[i];
                target2 = arr2[j];
            }
        }
        final = [target1, target2]
    }
    return final;
};
