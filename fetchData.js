function fetchData(callback) {
    setTimeout(() => {
      callback('Hello from Data.');
    }, 1000);
  }
  
  module.exports = fetchData;