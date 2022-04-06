// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function (arr) {
    let squaredArray = arr.map((num) => 
        num * num);
        for (i = 0; i < squaredArray.length; i++) {
            for (j = 0; j < squaredArray.length - i - 1; j++) {
                var num1 = squaredArray[j];
                var num2 = squaredArray[j + 1];
                if (squaredArray[j] > squaredArray[j + 1]) {
                    var placeHolder;
                    placeHolder = num1;
                    squaredArray[j] = num2;
                    num1 = num2;
                    squaredArray[j + 1] = placeHolder;
                }
            }
        }
        console.log(squaredArray)
    return squaredArray;
};
