var promise = Promise.resolve('SECRET VALUE');
promise.then(console.log);

var promise2 = Promise.reject(new Error('SECRET VALUE'));
promise2.catch(function(err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
})