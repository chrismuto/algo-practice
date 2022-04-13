// Write your solution here
const maxSumArray = function(numbers) {
  let total2 = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    let total1;
    total1 = numbers[i];
    for (j = i+1; j <= numbers.length; j++) {
      if (numbers[j] === undefined) {
        continue;
      }
      if (total1 < total1 + numbers[j]);
      total1 = total1 + numbers[j]
      console.log(total1);
      if (total1 > total2) {
        total2 = total1
      }
    }
  }
  return total2;
};
