"use strict";

// Thursday: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// function sumAll(arr) {
//   return 1;
// }
// sumAll([1, 4]);

// The lowest number will not always come first.

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.

function sumAll(arr) {
  if (arr[0] > arr[1]) {
    arr.reverse();
  }

  const from = arr[0];
  const to = arr[1];
  let result = null;

  for (let num = from + 1; num < to; num++) {
    result += num;
  }
  return result + from + to;
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
