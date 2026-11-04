/**
 * Lunch Picker Program
 * freeCodeCamp | JavaScript Lab
 *
 * Manages a lunch menu by adding and removing items
 * from the beginning and end of an array.
 *
 * Includes six functions for adding, removing,
 * randomly selecting, and displaying lunch items.
 *
 * Concepts: Arrow Functions, Arrays, Conditionals,
 *           Array Methods (push, pop, shift, unshift, join),
 *           Math.random(), Math.floor(), Template Literals
 */

const lunches = [];

const addLunchToEnd = (array, item) => {
    array.push(item);
    console.log( `${item} added to the end of the lunch menu.`);
    return array;
};

const addLunchToStart = (array, item) => {
    array.unshift(item);
    console.log(`${item} added to the start of the lunch menu.`);
    return array;
};

const removeLastLunch = array => {

    if (array.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const deletedLunch = array.pop();
        console.log(`${deletedLunch} removed from the end of the lunch menu.`);
    }
    return array;
};

const removeFirstLunch = array => {

    if(array.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const deletedLunch = array.shift();
        console.log(`${deletedLunch} removed from the start of the lunch menu.`);
    }
    return array;
};

const getRandomLunch = array => {
    
    if (array.length === 0) {
        console.log("No lunches available.");
    } else {
        const randomLunch = Math.floor(Math.random() * array.length);
        console.log(`Randomly selected lunch: ${array[randomLunch]}`);
    }
};

const showLunchMenu = array => {
    if (array.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${array.join(", ")}`);
    }
    
};