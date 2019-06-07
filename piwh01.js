const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

setTimeoutPromise(300).then((value) => {
  console.log("TIMED OUT!")
});



// Solution
// setTimeout(function () {
//     // After 300ms has elapsed, print out 'TIMED OUT!'

//     console.log('TIMED OUT!');
//   }, 300);