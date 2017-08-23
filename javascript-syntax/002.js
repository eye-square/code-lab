// this is a comment, everything after // gets ignored.

// variables:
// there are 3 keywords for creating variables:
// - var (not used any more),
var myVar = 'my content';
// - const: a variable that never changes,
const myConst = 'my constant';
// myConst = 'something else';
// - let: a variable that changes.
let myOtherVar = 'i am something';
myOtherVar = 'new stuff';

console.log(myOtherVar);
// types of variables

// string:
'string';
const aString ="something";
console.log(`${myVar} string as well`);
// number
const aNumber = 123;
const aNotherNumber = 1.2333;
console.log(aNumber + aNotherNumber);
// boolean (true, false)
const aBoolean = true;
const aNotherBoolean = false;

// object, more complex structure to bundle properties
const johannes = {
  age: 29,
  firstname: 'johannes',
  lastname: 'merz',
  eyes: {
    left: 'green',
    right: 'grey',
  },
  hasBirthday: function(){
    this.age = this.age + 1;
  }
};
johannes.firstname = undefined;

console.log(johannes.age);
console.log(johannes.eyes.left);
// array, a group of variables (usually of the same type)
const myArray = [1, 2, 3, 9];
myArray.length // => 4
console.log(myArray[1], myArray[2]);

// operators
// https://www.w3schools.com/JSREF/jsref_operators.asp
// arithmetic and assignment
// =
const assignment = 1;
// + - * / %
console.log(1 + 2);
console.log(2 - 1);
console.log(2 * 3);
console.log(4 / 2);
console.log(5 % 3);

console.log('1' + '2');

// comparison
// === !==
console.log(1 === 1);
console.log(1 !== 0);
// < <= > >=
console.log(1 < 2);
console.log(1 <= 1);
console.log(2 > 1);
console.log(1 >= 1);

// logical
// && || !
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(true || false ); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false
console.log(true || true); // -> true
console.log(!true); // -> false
console.log(!false); // true

console.log((1 > 2) && ((2 - 3) > 4));

let myCounter = 0;
myCounter = myCounter + 1;
myCounter+= 1;
myCounter++;

// others
// typeof
console.log(typeof myCounter);
console.log(typeof myArray, Array.isArray(myArray));

// functions: functions are grouped statements/instructions
// declaration
function add(a, b) {
  return a + b;
}
// call
console.log(add(2, 3));
