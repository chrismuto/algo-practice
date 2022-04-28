// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset
let lower = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
};
let upper = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z",
};

var caesarCipher = function (str, offset) {
  let str2 = "";
  let shift = offset % 26;
  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str2 = str2 + " ";
    }
    for (j = 1; j < 27; j++) {
      if (str[i] == Object.values(lower[j])) {
        let y = j + shift;
        if (y > 26) {
          y = y - 26;
        } else if (y < 1) {
          y = y + 26;
        }
        str2 = str2 + lower[y];
      } else if (str[i] == Object.values(upper[j])) {
        let y = j + shift;
        if (y > 26) {
          y = y - 26;
        } else if (y < 1) {
          y = y + 26;
        }
        str2 = str2 + upper[y];
      }
    }
  }
  return str2;
};
