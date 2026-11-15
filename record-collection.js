/**
 * Record Collection
 * freeCodeCamp | JavaScript Lab
 *
 * Updates album properties in a record collection.
 * Removes properties, creates track arrays when needed,
 * and adds new tracks while preserving existing ones.
 *
 * Concepts: Functions, Objects, Arrays,
 *           Dynamic Property Access, Object.hasOwn(),
 *           delete, push(), Conditionals
 */

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {

    if (value === "") {
        delete records[id][prop];
    }

    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    }

    if (prop === "tracks" && value !== "" && !Object.hasOwn(records[id], "tracks")) {
        records[id][prop] = [];
        records[id][prop].push(value);
    } else if (prop === "tracks" && value !== "" && Object.hasOwn(records[id], "tracks")) {
         records[id][prop].push(value);
    }
    return records;
}

// Test 1: Add a track
updateRecords(recordCollection, 2548, "tracks", "New Song");
console.log(recordCollection[2548].tracks);

// Test 2: Create a tracks array
updateRecords(recordCollection, 5439, "tracks", "Dancing Queen");
console.log(recordCollection[5439].tracks);

// Test 3: Update an artist
updateRecords(recordCollection, 1245, "artist", "New Artist");
console.log(recordCollection[1245].artist);

// Test 4: Delete a property
updateRecords(recordCollection, 2468, "artist", "");
console.log(recordCollection[2468].artist);