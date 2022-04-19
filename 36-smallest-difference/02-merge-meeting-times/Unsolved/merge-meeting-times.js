// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function(arr) {
    let placeholder;
    for (i = 0; i < arr.length; i++) {
        for (j = i+1; j < arr.length; j++) {
            if (arr[i][0] > arr[j][0]) {
                placeholder = arr[i];
                arr[i] = arr[j];
                arr[j] = placeholder;
            }
        }
    }
    for (i = 0; i < arr.length; i++) {
        for (j = i+1; j < arr.length; j++)
        if (arr[i][1] >= arr[j][0] && arr[i][1] <= arr[j][1]) {
            let newTime = arr[j][1];
            arr[i].pop();
            arr[i].push(newTime);
            arr.splice(j);
            j--;
        }  else if (arr[i][0] <= arr[j][0] && arr[i][1] >= arr[j][1]) {
            arr.splice(j);
            j--;
        }
    }
    console.log(arr);
    return arr;
};
