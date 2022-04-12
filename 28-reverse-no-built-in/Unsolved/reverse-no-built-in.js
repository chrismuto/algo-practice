// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    var revStr = [];
    for (i = 0; i < str.length; i ++) {
        revStr[i] = str[str.length - 1 - i];
    }
    return revStr.join('');
};
