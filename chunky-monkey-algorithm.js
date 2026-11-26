/**
 * Chunky Monkey Algorithm
 * freeCodeCamp | JavaScript Lab
 *
 * Splits an array into smaller groups of a specified size.
 * Returns a two-dimensional array containing these groups.
 * The last group may contain fewer elements.
 *
 * Concepts: Functions, arrays, for loops,
 * slice(), push(), array indexing.
 */

const chunkArrayInGroups = (arr, size) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

// Test 1
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// [["a", "b"], ["c", "d"]]

// Test 2
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// [[0, 1, 2], [3, 4, 5]]

// Test 3
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// [[0, 1], [2, 3], [4, 5]]

// Test 4
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
// [[0, 1, 2, 3], [4, 5]]

// Test 5
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// [[0, 1, 2], [3, 4, 5], [6]]

// Test 6
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
// [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

// Test 7
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
// [[0, 1], [2, 3], [4, 5], [6, 7], [8]]