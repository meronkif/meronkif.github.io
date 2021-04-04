function sum(number) {
  if (number === 0) {
    return 0;
  } else {
    return number + sum(number - 1);
  }
}

console.log(sum(10));

//
let linkedList = {
  add: function (num) {
    if (num == 1) {
      return { value: num };
    } else {
      return { value: num, next: this.add(num - 1) };
    }
  },
  remove: function (num) {
    if (num === 1) {
      return {};
    } else return { value: num + 1, next: this.add(num - 1) };
  },
};

console.log(linkedList.remove(2));
