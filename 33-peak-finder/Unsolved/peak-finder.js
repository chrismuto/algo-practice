// TODO: Write a function that takes an array of integers containing exactly one peak.
// A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
const peakFinder = function (nums) {
  var max = 0;
  for (i = 0; i < nums.length; i++) {
    if (max === 0) {
      max = nums[i];
    }
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  return max;
};
