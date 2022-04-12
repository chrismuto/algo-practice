// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function (str) {
    let array = [];
    for (i = 0; i <= str.length; i++) {
        let object = str[i];
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            array.push(object);
        }
        if (object === ")") {
            if (array.pop() !== "(") {
                return false
            }
        }
        if (object === "}") {
            if (array.pop() !== "{") {
                return false
            }
        }
        if (object === "]") {
            if (array.pop() !== "[") {
                return false
            }
        }
        if (i === str.length) {
            return true
        }
    }
};
