/**
 * Truncate a String
 * freeCodeCamp | JavaScript Lab
 *
 * Shortens a string to a specified length
 * and appends "..." if the original string
 * exceeds the given limit.
 *
 * Concepts: Arrow Functions, Conditionals,
 *           String Length, slice(), Return Values
 */

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
};

console.log(truncateString("JavaScript", 4));
console.log(truncateString("Hello World", 5));
console.log(truncateString("Apple", 5));
console.log(truncateString("Cat", 10));
console.log(truncateString("Programming", 0));