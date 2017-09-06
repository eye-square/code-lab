// if
if (2 < 4) {
  console.log('hi there');
}

// if else
if (false) {
  console.log('i\'m true');
} else {
  console.log('i am not true');
}

// if else if else 
if (false) {
  console.log('i\'m true');
} else if (true) {
  console.log('i am the second one');
} else {
  console.log('final one');
}

if (true) {
  if (false) {
    
  } else {
    console.log('in here');
  }
}

const myNumber = 2;

if(myNumber > 2 && myNumber < 10) {
  console.log('im between 2 and 10');
} else {
  console.log('im not between 2 and 10');
}


// for loop
for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
console.log('------------------------------');
// while loop
let j = 0;
while (j < 10) {
  console.log(j);
  
  j++;
}
console.log('------------------------------');
// continue
for (let i = 0; i < 10; i++) {
  if(i === 5) {
    continue;
  }
  console.log(i);
}
console.log('------------------------------');
// break
for (let i = 0; i < 10; i++) {
  if(i === 5) {
    break;
  }
  console.log(i);
}

// functions and scope
// global scope
let global = 'my global var';
console.log(global);
function myFunction() {
  console.log('from myFunction', global);
}
myFunction();
// function scope
function myFunctionScope() {
  const innerVar = 'abc';
}
myFunctionScope();
// console.log(innerVar); // <- this will crash

// block scope
for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
// console.log(i); // <- this will crash

// most inner variable counts
function innerVarCounts() {
  const global = 'inner global';
  console.log(global);
}
innerVarCounts();
innerVarCounts();

console.log(global);
function changeGlobal() {
  global = 'inner global';
  console.log(global);
}
changeGlobal();
console.log(global);
