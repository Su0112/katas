//In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.
const numberOfVowels = function (data) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i])) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange")); // Output: 3
console.log(numberOfVowels("lighthouse labs")); // Output: 5
console.log(numberOfVowels("aeiou")); // Output: 5
