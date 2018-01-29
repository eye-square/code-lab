// functions get inputs and run a bunch of instructions before finally returning a value

// declaration (definition/logic of the function)
// normal
function myFunction(arg1, arg2) {
  console.log(arg1, arg2);

  return 123;
}
// arrow
const myArrow = (arg1, arg2) => {
  console.log(arg1, arg2);

  return 126;
};
// inside objects
const johannes = {
  firstname: "johannes",
  lastname: "merz",
  age: 29,

  hasBirthday() {
    this.age = this.age + 1;
    return this.age;
  }
};

// call (use of a function)
console.log(myFunction("hans", "wurst"));
// console.log(myArrow("hans", "peter"));
console.log(johannes.hasBirthday());
console.log(johannes.hasBirthday());

// callback functions
function addListener(listener) {
  listener("hi there", "arg2");
}

addListener(myArrow);
addListener((arg1, arg2) => {
  console.log(arg1, arg2);
  console.log("have been called");
});
