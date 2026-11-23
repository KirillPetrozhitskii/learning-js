/**
 * Mutations Algorithm
 * freeCodeCamp | JavaScript Lab
 *
 * Checks whether the first string contains every character
 * of the second string, ignoring letter case.
 * Returns false if a character is missing, otherwise true.
 *
 * Concepts: Functions, for...of, toLowerCase(),
 * includes(), conditionals, logical NOT (!), early return.
 */

const mutation = arr => {
        for (const char of arr[1].toLowerCase()) {
            if (!arr[0].toLowerCase().includes(char)) {
                return false;
            }    
        }
        return true;
    }

console.log(mutation(["hello", "Hello"]));
// true

console.log(mutation(["hello", "hey"]));
// false

console.log(mutation(["Alien", "line"]));
// true

console.log(mutation(["floor", "for"]));
// true

console.log(mutation(["hello", "neo"]));
// false

console.log(mutation(["Mary", "Aarmy"]));
// true