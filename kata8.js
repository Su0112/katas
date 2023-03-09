//
const repeatNumbers = function (data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    let num = data[i][0];
    let repeat = data[i][1];
    for (let j = 0; j < repeat; j++) {
      result += num;
    }
    if (i !== data.length - 1) {
      result += ", ";
    }
  }
  return result;
};
console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

//Expected Output
//1111111111
//11, 222
//10101010, 343434343434, 9292
