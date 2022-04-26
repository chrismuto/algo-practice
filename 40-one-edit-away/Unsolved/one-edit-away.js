const oneEditAway = function(str1, str2) {
// TODO: Write function that takes in two strings and returns true if one character away, otherwise false
    let longer;
    let differences = 0;
    if (str1.length >= str2.length) {
        longer = str1.length;
    } else {
        longer = str2.length;
    }
    for (i = 0; i < longer; i++) {
        if (str1[i] !== str2[i]) {
            differences = differences + 1;
        }
    }
    if (differences === 1) {
        return true;
    }
    return false;
}
