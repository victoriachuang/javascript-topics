// A function expression doesn't require a name, making
// it an anonymous function. It is commonly used in callbacks

setTimeout(function() {
  alert("hello");
});

element.onclick = function(counter) {
  return counter += 1;
};

element.addEventListener("click", function(message) {
  console.log(message);
});

// A function declaration is the definition of
// a named function and is called by its name

function printHello() {
  console.log("hello");
}

printHello();
