// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

var maxProfit = function (prices) {
    let max = 0;
    let maxIndex;
    let min = prices[0];
    let minIndex = 0;
        for (i = 0; i < prices.length; i++) {
            if (prices[1] === undefined) {
                return 0;
            }
            if (prices[i] > max) {
                max = prices[i];
                maxIndex = i;
            }
            if (prices[i] < min) {
                min = prices[i];
                minIndex = i;
            }
            if (maxIndex < minIndex) {
                prices[maxIndex] = prices[0];
                prices.shift();
                max = 0;
            }
        }
        return max-min;
};
