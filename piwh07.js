first().then(function(result) {
    return second(result)
}).then(function(newResult) {
    console.log(newResult);
})