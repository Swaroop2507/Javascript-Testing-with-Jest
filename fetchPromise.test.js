const fetchPromise =require('./fetchPromise');
test('data check for promise',() => {
    return expect(fetchPromise()).resolves.toBe('Hello world!');
});

test('data check for error', async() => {
    const data = await fetchPromise();
    return expect(data).rejects.toThrow('error');
});