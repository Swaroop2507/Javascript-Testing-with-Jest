// const sum = require('./sum');

// test('add 1 + 2 to equal 3',() => {
//     expect(sum(1,2)).toBe(3);
// });


test('object assignmetn', () => {
    const data = {one : 1};
    data['two'] = 2;
    // data = {two:2};  //Test Suites: 1 failed, 1 total
    expect(data).toEqual({one:1, two:2});
});