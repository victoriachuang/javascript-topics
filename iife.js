// The following syntax is an immediately-invoked function
// expression. It runs immediately after it is created. It is used
// to execute code without putting it in the global namespace.

(function() {
  var a = "hello";
  console.log(a + " from inside the function");
})(); // Ouput: hello from inside the function

// a has been defined but is not accessible
// from outside the IIFE's scope
console.log(a + " from outside the function"); // Error: a is not defined

// Parameters can be passed to an IIFE as well

var message = "hello";

(function(m) {
  console.log(m);
})(message); // Output: hello
