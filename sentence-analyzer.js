/**
 * Sentence Analyzer
 * freeCodeCamp | JavaScript Workshop
 *
 * Analyzes a sentence by counting vowels, consonants,
 * punctuation marks, and words.
 *
 * Uses loops, string methods, and conditional statements
 * to examine characters and calculate the results.
 *
 * Concepts: Arrow Functions, For...of Loops, Strings,
 *           String Methods (includes, toLowerCase, split),
 *           Conditionals, Counters, Return Statements
 */

const getVowelCount = sentence => {
    const vowels = "aeiou";
    let count = 0
    for (const char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

const getConsonantCount = sentence => {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
    for (const char of sentence.toLowerCase()) {
        if (consonants.includes(char)) {
            count++;
        }
    }
    return count;
};

const getPunctuationCount = sentence => {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
    for (const char of sentence) {
        if (punctuations.includes(char)) {
            count++;
        }
    }
    return count;
};

const getWordCount = sentence => {
    const wordArr = sentence.split(" ");
    let count = 0;
    for (const word of wordArr) {
        if (word !== "") {
            count++;
        }
    }
    return count;
};


console.log(getVowelCount("Hello World")); // 3
console.log(getConsonantCount("Coding is fun")); // 7
console.log(getPunctuationCount("Hello, world!!!")); // 4
console.log(getWordCount("Hello world")); // 2
console.log(getWordCount("Hello   world")); // 2
console.log(getWordCount("   ")); // 0
console.log(getWordCount("")); // 0