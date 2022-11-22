// sum.test.js

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

//made to fail
test('divide 5 by zero to equal 5, should fail', () => {
  expect(5/0).toBe(5)
});

//made to fail
test('multiply 5 by zero to get 5 , should fail', () => {
  expect(5*0).toBe(5)
});