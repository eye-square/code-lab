// this is a comment, everything after // gets ignored.

// variables:
// there are 3 keywords for creating variables:
// - var (not used any more),
// - const: a variable that never changes,
// - let: a variable that changes.

// create a variable name and assign it the value hans, hans is a string (just multiple characters)
const name = 'hans'; // notice the '' at the beginning and the end of a string
// create a variable age and assign it the value 32
let age = 32;

age = age + 1; // take the value of age (32), add one to it, and assign the new value to age again (now 33)


// different types of variables:
// string:
const aString = 'abc';
// number
const aNumber = 1;
// boolean (true, false)
const aBoolean = true;
// array, a group of variables (usually of the same type)
const anArray = ['abc', 'def'];
anArray[0]; // abc
anArray[1]; // def
// object, more complex structure to bundle properties
const anObject = {
  name: 'hans',
  age: 32
};
anObject.name; // 'hans'
anObject.age; // 32


// functions: functions are grouped statements/instructions
function add(a, b) {
  return a + b; // the first argument (a) and the second argument (b) are added and returned
}
// we call a function by simply writing its name followed by brackets, inside the brackets we pass the arguments the function needs
add(1, 2); // <- returns 3
add(2, 3); // <- returns 5
add(add(1, 2), add(2, 3)); // <- returns 8 (first 1 and 2 are added to 3, then 2 and 3 are added to 5, both results are then passed to another add whitch results in 8)
