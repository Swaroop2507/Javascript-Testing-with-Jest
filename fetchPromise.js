function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello world!'), 1000);
        });
}

module.exports = fetchPromise;