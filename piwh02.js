var promise = require('es6-promise');

var promise1 = new Promise(function(fulfill, reject) {
    setTimeout(function() {
        fulfill('FULFILLED!');
    }, 300)
})

promise1.then(function(value) {
    console.log(value)
})

//console.log(promise1)