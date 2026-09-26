//Date: September 17, 2026

/*
Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.
*/

function mirror(str) {
    let reversedString = str.split('').reverse().join('');
    return `${str}${reversedString}`;
}

console.log(mirror("freeCodeCamp"))