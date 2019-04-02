const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add undefined + 2 to be NaN', () => {
  expect(sum(undefined, 2)).toBe(NaN);
});

test('add 1 + undefined to be NaN', () => {
  expect(sum(1, undefined)).toBe(NaN);
});
