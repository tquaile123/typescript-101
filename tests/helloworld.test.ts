import  { hello } from '../src/helloworld';

test('Hello World: Tom!', () => {
  expect(hello('Tom')).toBe("Hello World: Tom!");
});