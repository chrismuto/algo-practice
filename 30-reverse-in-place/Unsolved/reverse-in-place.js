// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
    console.log(arr);
    let i = 0;
    let count = arr.length - 1;
    while (count > i) {
        const placeholder = arr[i];
        arr[i] = arr[count];
        arr[count] = placeholder;
        i++;
        count--;
    }
    return arr;
};
