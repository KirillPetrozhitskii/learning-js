/**
 * String Repeating Function
 * freeCodeCamp | JavaScript Lab
 *
 * Repeats a given string a specified number of times
 * without using the built-in repeat() method.
 *
 * Uses a for loop and string concatenation to build
 * the result. Returns an empty string when the
 * repetition count is zero or negative.
 *
 * Concepts: Functions, Parameters, For Loops,
 *           String Concatenation (+=), Return Statements
 */

function repeatStringNumTimes(string, repeatNum) {
    let newString = "";
    for (let i = 0; i < repeatNum; i++) {
        newString += string;
    }
    return newString;
}

const result = repeatStringNumTimes("abc", 3);
console.log(result);