// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
    for (i = 0; i < words.length; i++) {
        var element = words[i];
        var element2 = words[i+1];
        var elArray = [element, element2];
        var wordArray = [element, element2];
        var sortTestArray = wordArray.sort();
        console.log(elArray);
        console.log(sortTestArray);
        if (i + 1 === undefined) {
            return -1;
        } else if (elArray[0] !== sortTestArray[0]) {
            console.log(i+1);
            return i+1;
        }
    }
    return -1;
};
