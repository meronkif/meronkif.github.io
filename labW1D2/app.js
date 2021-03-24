/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";
function nameString(obj) {
  if (obj === undefined) {
    return "no object passed";
  } else if (obj == null) {
    return "null argument";
  } else if (Object.keys(obj).length === 0) {
    return "object has no properties";
  } else {
    let keys = [];
    for (let index in obj) {
      keys.push(index);
    }
    return keys.sort().join(".");
  }
}
console.log(nameString({}));
