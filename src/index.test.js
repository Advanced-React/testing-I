const sum = require('./index')
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

describe('index.js', ()=> {
    it('should return 4', ()=> {
        const actual = sum(2,2);
        const expected = 4;
        expect(actual).toBe(expected);
    })
})
