/**
 * Data Sanitizer Sweep Process
 * freeCodeCamp | JavaScript Lab
 *
 * Sanitizes log entries by replacing disallowed characters with "#".
 * Processes logs, skips informational entries, and stops on fatal errors.
 * Tracks sanitized and informational entry counts.
 *
 * Concepts: Functions, for loops, for...of, includes(),
 * conditionals, continue, return, string manipulation.
 */

let logs_1 = [
    "INFO: Server started on port 3000",
    "DEBUG: user=admin token=abc123 connected",
    "WARN: High memory usage detected at 87%"
];

let logs_2 = [
    "FATAL: System overload detected, shutting down",
    "DEBUG: token=def456$ refreshed for session",
    "ERROR: Null pointer exception in module auth"
];

let logs_3 = [
    "ERROR: Failed to connect to db, retry=3",
    "DEBUG: api_key=XYZ789 used in request",
    "/INFO: Cache cleared successfully",
    "WARN: Disk usage at 92%, threshold=90%",
    "/INFO: Disk usage stabilized"
];

function sanitizeLog(entry, disallowedCharacters) {
    let newString = "";
    for (let char of entry) {
        if (disallowedCharacters.includes(char)) {
            char = "#";    
        }
    newString += char;
    }
    return newString;  
}

function cleanLogs(logs, disallowedCharacters) {
    let countInfo = 0;
    let countProcessedInfo = 0;

    for (let i = 0; i < logs.length; i++) {
        if (logs[i].includes("$")) {
            return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
        }

        if (logs[i][0] === "/") {
            countInfo++;
            continue;
        }

        sanitizeLog(logs[i], disallowedCharacters);
        countProcessedInfo++;
    }
    return `Total Entry Count: ${logs.length}. Sanitized Entry Count: ${countProcessedInfo}. Informational Entry Count: ${countInfo}. Finished sanitizing logs.`;
}

console.log(cleanLogs(logs_1, ["a", "A", "c", "T"]));
// Total Entry Count: 3. Sanitized Entry Count: 3. Informational Entry Count: 0. Finished sanitizing logs.

console.log(cleanLogs(logs_2, ["a", "A", "c", "T"]));
// Sanitizing stopped. Failure Reason: Fatal character occurred.

console.log(cleanLogs(logs_3, ["a", "A", "c", "T"]));
// Total Entry Count: 5. Sanitized Entry Count: 3. Informational Entry Count: 2. Finished sanitizing logs.