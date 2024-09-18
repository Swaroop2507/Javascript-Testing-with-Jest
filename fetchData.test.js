const fetchData = require('./fetchData');

test('to check data', (done) => {
  fetchData((data) => {
    try {
      expect(data).toBe('Hello from Data.');
      done();
    } catch (error) {
      done(error);
    }
  });
});