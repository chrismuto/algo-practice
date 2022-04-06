// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    const words = str.split(" ");
    words[0] = words[0].toLowerCase();
    for (i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    let answer = words.join("");
    return answer;
};
