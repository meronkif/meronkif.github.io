/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
  if (string === undefined) {
    return "missing argument";
  } else if (typeof string !== "string") {
    return "argument not string";
  } else {
    let splitted = [...string];
    let nonEvenCharacter = [];
    for (let i = 0; i < splitted.length; i++) {
      if (i % 2 !== 0) {
        nonEvenCharacter.push(splitted[i]);
      }
    }
    return nonEvenCharacter.join("");
  }
}
console.log(removeEvenCharacters());

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
  if (array === [] || array === undefined) {
    return 0;
  } else {
    let sum = 0;
    for (let item of array) {
      if (item > 0) {
        sum += item;
      }
    }
    return sum;
  }
}
console.log(sumPositiveNumbers());
// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
  this.array = array;
  let numbers = [];
  let strings = [];
  for (let item of array) {
    if (typeof item === "number") {
      numbers.push(item);
    } else {
      strings.push(item);
    }
  }
  return { numbers: numbers, strings: strings };
}
let myArray = new ArrayDemo([1, "a", "c", 2, 4]);
console.log(myArray);
// Makes all negative numbers of the input array positive
function makePositive(array) {
  let newArray = [];
  for (let item of array) {
    if (item < 0) {
      newArray.push(-item);
    } else {
      newArray.push(item);
    }
  }
  return newArray;
}
console.log(makePositive([-1, 2, -7]));
// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];

function removeZeros(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 && array[i + 1] === 0) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray.map(function (a) {
    if (a === 0) {
      return "*";
    } else {
      return a;
    }
  });
}

console.log(removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]));
