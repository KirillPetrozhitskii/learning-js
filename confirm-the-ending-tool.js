/**
 * Confirm the Ending Tool
 * freeCodeCamp | JavaScript Lab
 *
 * Checks whether a string ends with a specified
 * target substring without using endsWith().
 *
 * Handles empty strings and uses early return
 * to avoid unnecessary operations.
 *
 * Concepts: Arrow Functions, String Methods,
 *           slice(), length, Strict Equality,
 *           Conditionals, Early Return
 */

const confirmEnding = (str, target) => { // "" Hello
    if (target === "") {
        return true; 
    }

    const value = str.slice(-target.length);
    return value === target;
};

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("JavaScript", "Script"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Cat", ""));
console.log(confirmEnding("", ""));
console.log(confirmEnding("", "Hello"));