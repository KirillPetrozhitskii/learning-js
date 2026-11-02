/**
 * Leap Year Calculator
 * freeCodeCamp | JavaScript Lab
 *
 * Determines whether a given year is a leap year
 * based on the Gregorian calendar rules.
 *
 * Includes three implementations:
 * if/else, ternary operator, and template literals.
 *
 * Concepts: Arrow Functions, Conditionals,
 *           Logical Operators, Modulo (%),
 *           Ternary Operator, Template Literals
 */

const year = 2024;

const isLeapYear = num => {
    if (num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0)) {
        return `${num} is a leap year.`;
    }  else {
        return `${num} is not a leap year.`;
    }
}; 

//const isLeapYear = num => (num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0)) ? `${num} is a leap year.` : `${num} is not a leap year.`;
/*const isLeapYear = num =>
  `${num} is ${num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0) ? "a" : "not a"} leap year.`; */

console.log(isLeapYear(year));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2023));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(2027));