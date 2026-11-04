/**
 * Golf Score Translator
 * freeCodeCamp | JavaScript Lab
 *
 * Converts golf scores into their corresponding names
 * based on the number of strokes relative to par.
 *
 * Uses conditional statements and array indexing
 * to determine and return the correct score name.
 *
 * Concepts: Arrow Functions, Arrays, Array Indexing,
 *           Conditionals (if/else if/else),
 *           Comparison Operators, Return Statements
 */

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];

const golfScore = (par, strokes) => {
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5];
    } else {
        return names[6];
    }
};

console.log(golfScore(4, 1)); // "Hole-in-one!"
console.log(golfScore(4, 2)); // "Eagle"
console.log(golfScore(4, 3)); // "Birdie"
console.log(golfScore(4, 4)); // "Par"
console.log(golfScore(4, 5)); // "Bogey"
console.log(golfScore(4, 6)); // "Double Bogey"
console.log(golfScore(4, 7)); // "Go Home!"
