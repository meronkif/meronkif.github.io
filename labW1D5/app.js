/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function countSubstring(s, target) {
  let lengthOfString = s.length;
  let lengthWithOutTarget = s.split(target).length;
  if (s.includes(target)) {
    return (lengthOfString - lengthWithOutTarget) / target.length;
  } else {
    return 0;
  }
}

function saveInLocalStorage(name, obj) {
  let objString = JSON.stringify(obj);
  localStorage.setItem(name, objString);
  let objObject = JSON.parse(localStorage.getItem(name));
  return objObject;
}
console.log(saveInLocalStorage());

function getFromLocalStorage(name) {
  return JSON.parse(window.localStorage.getItem(name));
}

//
function addMissingProperty(obj) {
  if (this.hasOwnProperty(obj)) {
    return obj;
  } else {
    return Object.assign(this, obj);
  }
}

//
function Person(name, country) {
  this.name = name;
  this.country = country;
  this.creationDate = {
    getDate: function () {
      return new Date().getDate();
    },
    getMonth: function () {
      return new Date().getMonth();
    },
    getFullYear: function () {
      return new Date().getFullYear();
    },
  };
}

//
function register(students) {
  const newMap = new Map();
  for (let item of students) {
    newMap.set(item, 0);
  }
  return newMap;
}

//
function incrementAbsences(course, student) {
  const newMapCourse = new Map(student);
  return newMapCourse.set(course, value++);
}
