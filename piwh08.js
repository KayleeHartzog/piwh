function attachTitle(value){
    return "DR. " + value;
}

var promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);

    // promise.then(function(result){
    //     return (attachTitle(result));
    // }).then(function(newResult) {
    //     console.log(newResult);
    // })