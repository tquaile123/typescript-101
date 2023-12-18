import { fizzbuzz, fizzbuzz2 } from "../src/fizzbuzz";
import { performance } from "perf_hooks";

describe('Ternary', () => {
    let startTime = performance.now();

    test('1, 2, fizz', () => {
        const expected = ['1', '2', 'Fizz'];

        expect(fizzbuzz(3)).toStrictEqual(expected);
    });
    
    test('1, 2, fizz, 4, buzz', () => {
        const expected = ['1', '2', 'Fizz', '4', 'Buzz'];

        expect(fizzbuzz2(5)).toStrictEqual(expected);
    });
    
    test('1, 2, fizz, 4, buzz', () => {
        const expected = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz', 'Fizz', '22', '23', 'Fizz', 'Buzz', '26', 'Fizz', '28', '29', 'FizzBuzz', '31', '32', 'Fizz', '34', 'Buzz', 'Fizz', '37', '38', 'Fizz', 'Buzz', '41', 'Fizz', '43', '44', 'FizzBuzz', '46', '47', 'Fizz', '49', 'Buzz', 'Fizz', '52', '53', 'Fizz', 'Buzz', '56', 'Fizz', '58', '59', 'FizzBuzz', '61', '62', 'Fizz', '64', 'Buzz', 'Fizz', '67', '68', 'Fizz', 'Buzz', '71', 'Fizz', '73', '74', 'FizzBuzz', '76', '77', 'Fizz', '79', 'Buzz', 'Fizz', '82', '83', 'Fizz', 'Buzz', '86', 'Fizz', '88', '89', 'FizzBuzz', '91', '92', 'Fizz', '94', 'Buzz', 'Fizz', '97', '98', 'Fizz', 'Buzz'];

        expect(fizzbuzz(100)).toStrictEqual(expected);
    });

    let endTime = performance.now();
    console.log(`Ternary took ${endTime - startTime} milliseconds`);
});

describe('If Else', () => {
    let startTime = performance.now();

    test('1, 2, fizz', () => {
        const expected = ['1', '2', 'Fizz'];

        expect(fizzbuzz2(3)).toStrictEqual(expected);
    });

    test('1, 2, fizz, 4, buzz', () => {
        const expected = ['1', '2', 'Fizz', '4', 'Buzz'];


        expect(fizzbuzz2(5)).toStrictEqual(expected);
    });


    test('1 to 100', () => {
        const expected = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz', 'Fizz', '22', '23', 'Fizz', 'Buzz', '26', 'Fizz', '28', '29', 'FizzBuzz', '31', '32', 'Fizz', '34', 'Buzz', 'Fizz', '37', '38', 'Fizz', 'Buzz', '41', 'Fizz', '43', '44', 'FizzBuzz', '46', '47', 'Fizz', '49', 'Buzz', 'Fizz', '52', '53', 'Fizz', 'Buzz', '56', 'Fizz', '58', '59', 'FizzBuzz', '61', '62', 'Fizz', '64', 'Buzz', 'Fizz', '67', '68', 'Fizz', 'Buzz', '71', 'Fizz', '73', '74', 'FizzBuzz', '76', '77', 'Fizz', '79', 'Buzz', 'Fizz', '82', '83', 'Fizz', 'Buzz', '86', 'Fizz', '88', '89', 'FizzBuzz', '91', '92', 'Fizz', '94', 'Buzz', 'Fizz', '97', '98', 'Fizz', 'Buzz'];

        expect(fizzbuzz2(100)).toStrictEqual(expected);
    });

    let endTime = performance.now();
    console.log(`If Else took ${endTime - startTime} milliseconds`);
});
