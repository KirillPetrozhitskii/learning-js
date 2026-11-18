/**
 * Longest Word Finder
 * freeCodeCamp | JavaScript Lab
 *
 * Finds the length of the longest word in a given sentence.
 *
 * Splits the sentence into an array of words and uses
 * a loop to compare their lengths, keeping track of
 * the maximum value.
 *
 * Concepts: Arrow Functions, Arrays, String Methods (split),
 *           For...of Loops, String Length, Conditionals,
 *           Comparison Operators, Return Statements
 */

const findLongestWordLength = string => {
    const stringArr = string.split(" ");  
    let maxLength = 0;
    for (const word of stringArr) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

console.log(findLongestWordLength("May the force be with you"));