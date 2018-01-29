// this is a comment, everything after // gets ignored.

// variables: memory of your application
// - const: a variable that never changes,
const myVar = 1;
console.log(myVar);
// - let: a variable that changes.
let age = 29;
age = age + 1;
console.log(age);
// types of variables

// string:
console.log("ss");
console.log("geht auch");
// number
console.log(12, 1.2, 3 / 2);
// boolean
console.log(true, false);
// object, more complex structure to bundle properties
const johannes = {
  firstname: "johannes",
  lastname: "merz",
  age: 29,

  hasBirthday() {
    this.age = this.age + 1;
  }
};
console.log(johannes.age);
johannes.hasBirthday();
console.log(johannes.age);
// array, a group of variables (usually of the same type)
const myArr = [1, 2, 3, 4];
console.log(myArr[2]);

const game = {
  rods: [{}, {}, {}]
};
const anotherGame = {
  rod1: {},
  rod2: {},
  rod3: {}
};
