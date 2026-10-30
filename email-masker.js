/**
 * Email Masker
 * freeCodeCamp | JavaScript Lab
 *
 * Masks the username of an email address
 * while preserving its first and last characters.
 *
 * Concepts: slice(), indexOf(), replace(), repeat()
 */

const maskEmail = email => {
    const sliceValue = email.slice(1, email.indexOf("@") - 1);
    const replaceValue = email.replace(sliceValue, "*".repeat(sliceValue.length));
    return replaceValue;
}

const email = "kirikjust@mail.ru";
console.log(maskEmail(email));
