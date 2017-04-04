// Set timeout will wait for the time specified and fire once
setTimeout(function() {
  console.log('setting timeout');
}, 1000);

// Set interval will fire once every x millisecond-interval
setInterval(function() {
  console.log('setting interval');
}, 1000);

// Output:
// setting timeout
// setting interval
// setting interval
// setting interval
// setting interval
