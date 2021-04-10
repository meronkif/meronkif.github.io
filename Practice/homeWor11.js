//1.
let student = {
  firstName: "John",
  lastName: "Doe",
  grades: [95, 90, 89],
  inputNewGrade(newGrade) {
    return this.grades.push(newGrade);
  },
  averageGrades() {
    return Math.round(this.grades.reduce((a, b) => a + b) / this.grades.length);
  },
};

let student1 = Object.create(student);
let student2 = Object.create(student);
let student3 = Object.create(student);
let student4 = Object.create(student);
student1.firstName = "Mark";
student2.firstName = "Dawl";
student3.firstName = "Jayta";
student4.firstName = "Gorda";
student1.grades = [55, 88, 93];
student2.grades = [89, 77, 73];
student3.grades = [97, 99, 80];
student4.grades = [65, 75, 91];

student1.inputNewGrade(45);
student2.inputNewGrade(55);
student3.inputNewGrade(65);
student4.inputNewGrade(75);

let G1 = student1.averageGrades();
let G2 = student2.averageGrades();
let G3 = student3.averageGrades();
let G4 = student4.averageGrades();
let students = [student1, student2, student3, student4];
let averageGrade = [G1, G2, G3, G4];
console.log(students);
console.log(averageGrade);

//2. using constructor function

function Student(firstName2, lastName2, grades2) {
  this.firstName2 = firstName2;
  this.lastName2 = lastName2;
  this.grades2 = grades2;
}
Student.prototype.inputNewGrade2 = function (newGrade) {
  return this.grades2.push(newGrade);
};
Student.prototype.averageGrades2 = function () {
  return Math.round(this.grades2.reduce((a, b) => a + b) / this.grades2.length);
};
let student5 = new Student("Mark", "Doe", [77, 88, 99]);
let student6 = new Student("John", "Dwoya", [55, 66, 98]);
let student7 = new Student("Luke", "Paul", [45, 86, 78]);
let student8 = new Student("Andrew", "Tahi", [75, 56, 68]);
let students2 = [student5, student6, student7, student8];
let averageGrade2 = [];
averageGrade2.push(student5.averageGrades2());
averageGrade2.push(student6.averageGrades2());
averageGrade2.push(student7.averageGrades2());
averageGrade2.push(student8.averageGrades2());
console.log(students2);
console.log(averageGrade2);

//3.
Array.prototype.sort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      if (this[i] > this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};
