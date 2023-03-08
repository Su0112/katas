//Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array

const sumLargestNumbers = function (data) {
  // Sort the array in descending order
  const sortedData = data.sort((a, b) => b - a);
  //console.log(sortedData);

  // Add the two largest numbers
  return sortedData[0] + sortedData[1];
};
//console.log("Kata 1");
console.log(sumLargestNumbers([1, 10])); // Expected output: 11
console.log(sumLargestNumbers([1, 2, 3])); // Expected output: 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // Expected output: 126
