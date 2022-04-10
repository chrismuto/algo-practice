// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    var str1 = magazine.split(' ');
    var str2 = flyer.split(' ');
    var placeholder;
    for (i = 0; i < str1.length; i++) {
        for (j = 0; j < str2.length; j++) {
            console.log(str1);
            console.log(str2);
        if (str1[i] === str2[j]) {
          placeholder = str1[0];
          str1[0] = str1[i];
          str1[i] = placeholder;
          placeholder = str2[0];
          str2[0] = str2[j];
          str2[j] = placeholder;
          str1.shift();
          str2.shift();
          i--;
          j--;
          if (str2[0] === undefined) {
            return true;
          }
        }
    }
      };
      return false;
};
