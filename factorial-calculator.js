/**
 * Factorial Calculator
 * freeCodeCamp | JavaScript Lab
 *
 * Calculates the factorial of a given number
 * by multiplying all integers from 1 to that number.
 *
 * Uses a for loop to accumulate the result
 * and displays the final factorial using a template literal.
 *
 * Concepts: Functions, Parameters, For Loops,
 *           Multiplication Assignment (*=),
 *           Return Statements, Template Literals
 */

const num = 5;

function factorialCalculator(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i
    }
    return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);