//Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
const instructorWithLongestName = function (instructors) {
  let longestName = "";
  let instructorWithLongestName = {};
  for (const instructor of instructors) {
    if (instructor.name.length > longestName.length) {
      longestName = instructor.name;
      instructorWithLongestName = instructor;
    }
  }
  return instructorWithLongestName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); // Output: {name: "Jeremiah", course: "Web"}

console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
); // Output: {name: "Domascus", course: "Web"}
