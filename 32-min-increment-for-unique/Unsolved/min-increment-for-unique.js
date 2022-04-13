// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(nums) {
    let total = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums[j]++;
                total++;
                i = 0;
                j = i+1;
            }
        }
    }
    return total;
};
