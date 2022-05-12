// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function(str) {
    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let int = 0;
    let concNum;
    for (i = 0; i < str.length; i++) {
        concNum = `${str[i]}` + `${str[i+1]}`;
        console.log(concNum)
        if ((concNum) in lookup) {
            int = int + lookup[concNum];
            i++;
            console.log(int);
        } else if (str[i] in lookup) {
            int = int + lookup[str[i]];
            console.log(int);
        }
    } 
    return int;
};
