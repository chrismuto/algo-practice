// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function (str, sub) {
    var str1 = str.split('').sort();
    var str2 = sub.split('').sort();
    var placeholder;
    for (i = 0; i < str1.length; i++) {
        if (str1[i] === str2[0]) {
          placeholder = str1[0];
          str1[0] = str1[i];
          str1[i] = placeholder;
          str1.shift();
          str2.shift();
          i--
          if (str2[0] === undefined) {
            return true;
          }
        }
      };
      return false;
    }