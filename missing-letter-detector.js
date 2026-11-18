/**
 * Missing Letter Detector
 * freeCodeCamp | JavaScript Lab
 *
 * Finds a missing letter in an alphabetical sequence
 * and returns undefined if no letter is missing.
 *
 * Compares the alphabet positions of adjacent characters
 * using indexOf() to detect gaps in the sequence.
 *
 * Concepts: Arrow Functions, Strings, String Indexing,
 *           For Loops, indexOf(), Comparison Operators,
 *           Conditionals, Return Statements
 */

const fearNotLetter = (string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < string.length - 1; i++) {
        const currentIndex = alphabet.indexOf(string[i]);
        const nextIndex = alphabet.indexOf(string[i + 1]);
        if (nextIndex !== currentIndex + 1) {
            return alphabet[currentIndex + 1];
        }  
    }
    return undefined;
};

console.log(fearNotLetter("abce"));
