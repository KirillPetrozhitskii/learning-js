/**
 * Cargo Manifest Validator
 * freeCodeCamp | JavaScript Lab
 *
 * Normalizes cargo weight from pounds to kilograms
 * without modifying the original manifest.
 *
 * Validates required properties, identifies missing
 * or invalid values, and logs validation results.
 *
 * Concepts: Functions, Objects, Spread Syntax,
 *           Object.hasOwn(), typeof, Number.isInteger(),
 *           Number.isNaN(), Conditionals, Logical Operators,
 *           Template Literals
 */

function normalizeUnits (manifest) {
    const copy = {...manifest};

    if (copy.unit  === "lb") {
        copy.weight *= 0.45;
        copy.unit = "kg";
    }

    return copy;
}

function validateManifest(manifest) {
    const check = {};

    if (!Object.hasOwn(manifest, "containerId")) {
        check.containerId = "Missing";
    } else if (manifest.containerId < 1 || !Number.isInteger(manifest.containerId)) {
        check.containerId = "Invalid";
    }
    
    if (!Object.hasOwn(manifest, "destination")) {
        check.destination = "Missing";
    } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
        check.destination = "Invalid";
    }

    if (!Object.hasOwn(manifest, "weight")) {
        check.weight = "Missing";
    } else if (manifest.weight <= 0 || typeof manifest.weight !== "number" || Number.isNaN(manifest.weight)) {
        check.weight = "Invalid";
    }

    if (!Object.hasOwn(manifest, "unit")) {
        check.unit = "Missing";
    } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
        check.unit = "Invalid";
    }
    
    if(!Object.hasOwn(manifest, "hazmat")) {
        check.hazmat = "Missing";
    } else if (typeof manifest.hazmat !== "boolean") {
        check.hazmat = "Invalid";
    }

    return check;
}

function processManifest(manifest) {
    const error = validateManifest(manifest);
    const normalKg = normalizeUnits (manifest);

    if (Object.hasOwn(error, "containerId") || Object.hasOwn(error, "destination") || Object.hasOwn(error, "weight") ||Object.hasOwn(error, "unit") || Object.hasOwn(error, "hazmat")) {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(error);
    } else {
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalKg.weight} kg`);
    }
}


// Test 1 — Valid manifest (lb → kg)
processManifest({
  containerId: 1,
  destination: "Berlin",
  weight: 100,
  unit: "lb",
  hazmat: false
});

// Test 2 — Valid manifest (already kg)
processManifest({
  containerId: 2,
  destination: "Frankfurt",
  weight: 50,
  unit: "kg",
  hazmat: true
});

// Test 3 — Invalid manifest
processManifest({
  containerId: -5,
  destination: "   ",
  weight: -10,
  unit: "pounds",
  hazmat: "yes"
});

// Test 4 — Missing properties
processManifest({});