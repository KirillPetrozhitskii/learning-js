/**
 * Profile Lookup
 * freeCodeCamp | JavaScript Lab
 *
 * Searches for a contact by first name and returns
 * the value of a requested property.
 * Returns an error message if the contact or property
 * does not exist.
 *
 * Concepts: Functions, arrays, objects, for...of,
 * Object.hasOwn(), conditionals, logical operators, return.
 */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

const lookUpProfile = (name, prop) => {
    for (const object of contacts) {
    
        if ( object.firstName === name && Object.hasOwn(object, prop)) {
            return object[prop];
        } else if (object.firstName === name && !Object.hasOwn(object, prop)) {
            return "No such property";
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));
// "Vos"

console.log(lookUpProfile("Sherlock", "likes"));
// ["Intriguing Cases", "Violin"]

console.log(lookUpProfile("Harry", "number"));
// "0994372684"

console.log(lookUpProfile("Akira", "address"));
// "No such property"

console.log(lookUpProfile("Bob", "number"));
// "No such contact"