// A variable's definition is available from its parent scope.

var a = "kale";

function scopedVariable() {
  console.log(a);
}

scopedVariable(); // Output: kale

// The value of a global variable is able to be reassigned in a local
// scope. Here, the value of a is accessible from inside scopedVariable

var a;

function scopedVariable() {
  a = "hello"
}

console.log(a); // Output: undefined
scopedVariable(); // The definition of a is now available to the global scope
console.log(a); // Output: "hello"

// The inclusion of var inside the local scope
// prevents the globally-scoped a to be reassigned

var a = "hello";

function scopedVariable() {
  var a = "kale"
}

console.log(a); // Output: "hello"
scopedVariable();
console.log(a); // Output: "hello"
