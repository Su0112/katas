//Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array

const sumLargestNumbers = function (data) {
  // Sort the array in descending order
  const sortedData = data.sort((a, b) => b - a);
  //console.log(sortedData);

  // Add the two largest numbers
  return sortedData[0] + sortedData[1];
};
console.log("Kata 1");
console.log(sumLargestNumbers([1, 10])); // Expected output: 11
console.log(sumLargestNumbers([1, 2, 3])); // Expected output: 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // Expected output: 126

//Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

//Warning: Use some sort of looping. Do Not use Array.prototype.filter()

const conditionalSum = function (values, condition) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      sum += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      sum += values[i];
    }
  }
  return sum;
};
console.log("Kata 2");
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
