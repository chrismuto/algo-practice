// Write code to return the the number of vowels in `str`
var vowelCount = function (str) {
    var count = 0;
    for (i = 0; i < str.length; i++) {
        text = str[i].toLowerCase();
        if (text === "a" || text === "e" || text === "i" || text === "o" || text === "u") {
            count += 1;
        }
    };
    return count;
};