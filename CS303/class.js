// 1.
//setTimeout(()=>clock.stop(), 10000);
// Clock is the constructor function, so the inner function would be render.
//timer is the local variable
//since there is no function return, and a free variable, there is no closure.
//In the construction function clock, only the variable timer and the funciton render belong to it.
// Every object made of the Clock construction function will have access to start and stop methods, so they are public
//The presence of the constructor function proves that classes are functions.

//2.
class Student {
  constructor(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  }
  inputNewGrade(newGrade) {
    this.grades.push(newGrade);
  }
  computeAverageGrade() {
    return Math.round(this.grades.reduce((a, b) => a + b) / this.grades.length);
  }
}

let mark = new Student("Mark", "Johnson", [87, 78, 67]);
let andrew = new Student("Andrew", "Yang", [90, 92, 94]);
let candace = new Student("Candace", "Owens", [98, 91, 89]);

console.log(mark.computeAverageGrade());
console.log(andrew.computeAverageGrade());
console.log(candace.computeAverageGrade());
