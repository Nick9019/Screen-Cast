const { myFunction } = require('./window');

test('hello world!', () => {
	expect(myFunction()).toBe('expected value');
});