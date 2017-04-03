// Javascript will hoist declarations of variables
// to the top of their scopes, but not initializations

const x = 7;
const y = 5;
console.log(x + ' ' + y); // Output: 7 5

// This will not work, because y is initialized after it was used

const x = 7;
console.log(x + ' ' + y); // Error: y is not defined
const y = 5;

// The above is equivalent to the following

const x = 7;
let y;
console.log(x + ' ' + y);
y = 5;

// Function declarations will be hoisted to the top of the scope
hoist(); // Output: hoisted to the top

function hoist() {
  console.log('hoisted to the top');
};

// This will output undefined because
// the assignment of a is not hoisted

hoist(); // Output: undefined

const a = "hello";
function hoist() {
  console.log(a);
}

// This will output hello because the definition
// of a is available when hoist is called

const a = "hello";
hoist(); // Output: hello

function hoist() {
  console.log(a);
}
