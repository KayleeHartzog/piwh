var json = process.argv[2];

function parsePromised(value){
    var promise = new Promise(function (fulfill, reject) {
        try {
            var parsedJson = JSON.parse(value);
            fulfill(parsedJson);
        } catch (error) {
            reject(error.message);
        }
      });
      return promise;
}

parsePromised(json).catch(console.log);