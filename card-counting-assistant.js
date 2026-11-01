/**
 * Card Counting Assistant
 * freeCodeCamp | JavaScript Lab
 *
 * Tracks the running count of cards in Blackjack
 * and recommends whether to bet or hold.
 *
 * Rules:
 *  2–6        → +1
 *  7–9        →  0
 *  10, J–A    → -1
 *
 *  Positive count → Bet
 *  Zero or negative count → Hold
 *
 * Concepts: Functions, Conditionals, Logical Operators,
 *           Global Variables, Template Literals
 */

let count = 0;

const cardCounter = card => {
    if (card >= 2 && card <= 6) {
        count++;
    } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
        count--;
    };

    if (count > 0) {
        return `${count} Bet`;
    } else {
        return `${count} Hold`;
    }
};


// Test cases
console.log(cardCounter(2));   // 1 Bet
console.log(cardCounter("J")); // 0 Hold
console.log(cardCounter(9));   // 0 Hold
console.log(cardCounter(2));   // 1 Bet
console.log(cardCounter(7));   // 1 Bet