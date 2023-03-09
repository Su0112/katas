//In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.
const urlEncode = function (text) {
  let encodedText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (i === 0 || i === text.length - 1) {
        continue;
      }
      encodedText += "%20";
    } else {
      encodedText += text[i];
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs")); // Output: Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Output: Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); // Output: blue%20is%20greener%20than%20purple%20for%20sure
