import { sum } from './index.js';
// test('sum returns the sum of two numbers', () => {
// AAA
// Arrange- let's us set up any configuration we need for this test
// let first = 2;
// let second = 2;
// let expected = 4;

// ACT
// let actual = sum(first, second);

// ASSERT
// expect(actual).toBe(expected);
// });

test('sum returns the sum of two numbers', () => {
	//      Act  Arrange     Assert
	expect(sum(2, 2)).toBe(4);
	expect(sum(2, 3)).toBe(5);
});
