/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function Person(name, country, grades) {
  this.name = name;
  this.country = country;
  this.grades = grades;
  this.computeGrade = function () {
    let sum = this.grades.reduce((a, b) => a + b);
    return sum / this.grades.length;
  };
}

const person = new Person("bob", "usa", [100, 100]);
console.log(person.computeGrade());

function analyzer() {
  let numProperties = Object.keys(this).length;

  let keys = Object.keys(this);
  let count = 0;
  for (let item of keys) {
    if (item.length < 3) {
      count++;
    }
  }

  let cntShortName = count;

  let values = Object.values(this);
  let counter = 0;
  for (let item of values) {
    if (typeof item === "object") {
      counter++;
    }
  }
  let cntReferences = counter;

  return {
    numProperties: numProperties,
    cntShortName: cntShortName,
    cntReferences: cntReferences,
  };
}
