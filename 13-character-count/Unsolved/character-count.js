// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    let count = 1
    const sortedArray = str.split("").sort();
    const answer = [];
    console.log(sortedArray);
    for (i = 0; i < sortedArray.length; i++) {

        if (sortedArray[i] != sortedArray[i-1]) {
            if (i > 0) {
                let letter = sortedArray[i-1];
                letterCount = [letter, count];
                answer.push(letterCount);
            }
            let letter = sortedArray[i];
            count = 1;
            letterCount = [letter, count];
        } else if (sortedArray[i] === sortedArray[i-1]) {
            letterCount[count] = letterCount[count]+1;
        } else if (i === sortedArray.length) {
            let letter = sortedArray[i-1];
            letterCount = [letter, count];
            answer.push(letterCount);
            return answer;
        }
        const finalArray = characterCount;
    }
    console.log(answer);
    return answer;
};
