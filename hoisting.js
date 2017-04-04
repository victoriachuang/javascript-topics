// Javascript will hoist declarations of variables to
// the top of their parent scopes, but not definitions

(function() {
  var x = 'hello';
  var y = 'world';
  console.log(x + ' ' + y);
})(); // Output: hello world

// This will not work, because y is initialized after it was used

(function() {
  var x = 'hello';
  console.log(x + ' ' + y);
  var y = 'world';
})(); // Output: hello undefined

// The above is equivalent to the following

(function() {
  var x = 'hello';
  var y;
  console.log(x + ' ' + y);
  y = 'world';
})(); // Output: hello undefined

// Function declarations will be hoisted to the top of the parent scope

hoist(); // Output: hoisted to the top

function hoist() {
  console.log('hoisted to the top');
};

// This will output undefined because
// the assignment of a is not hoisted

hoistAgain(); // Output: undefined

var a = 'hello';
function hoistAgain() {
  console.log(a);
}

// This will output hello because the definition
// of a is available when hoist is called

var b = 'world';
hoistAThirdTime(); // Output: world

function hoistAThirdTime() {
  console.log(b);
}
