// A double equals compares two values "loosely" and
// will cast strings to numbers and objects to primitives
console.log('2' == '2'); // true
console.log('2' == 2); // true
console.log('2' == 'two'); // false

// Booleans will be casted to a number for comparison;
// For example: Number(true) == 1
console.log(true == 1); // true
console.log(true == '1'); // true
console.log(false == '0'); // true
console.log(true == '2'); // false

// A triple equals makes a strict comparison between two values and
// will not convert either value's type before making the comparison
console.log('2' === '2'); // true
console.log('2' === 2); // false
console.log('2' === 'two'); // false
console.log(true === 1); // false
