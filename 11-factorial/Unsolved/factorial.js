// Write code to create a function that returns the factorial of `num`
var factorial = function (num) {
    var total = 1;
    for (i = num; i > 1; i--) {
        total = total * i;
    }
    return total;
}