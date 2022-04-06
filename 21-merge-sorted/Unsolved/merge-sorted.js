// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    let fullArray = [...arr1, ...arr2];
    console.log(fullArray);
    for (i = 0; i < fullArray.length; i++) {
        for (j = 0; j < (fullArray.length - i - 1); j++) {
            var placeHolder;
            var num1 = fullArray[j];
            var num2 = fullArray[j+1];
            if (fullArray[j] > fullArray[j+1]) {
                placeHolder = num1;
                num1 = num2;
                fullArray[j] = num2;
                fullArray[j + 1] = placeHolder;
                console.log(fullArray);
            }
        }
    }
    return fullArray;
};
