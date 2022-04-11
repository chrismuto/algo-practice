// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    var splitStr = str.split('');
    var revStr = [];
    for (i = 0; i < splitStr.length; i ++) {
        revStr[i] = splitStr[splitStr.length - 1 - i];
    }
    return revStr.join('');
};
