const multiplyInto20 = function(arr) {
  for (i = 0; i <= arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] * arr[j] === 20) {
            return true;
        }
    }
}
return false;
};
