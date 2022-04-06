// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    var str1 = strA.split('').sort();
    var str2 = strB.split('').sort();
    if (str1.join('') === str2.join('')) {
        return true;
    }
    return false;
};
