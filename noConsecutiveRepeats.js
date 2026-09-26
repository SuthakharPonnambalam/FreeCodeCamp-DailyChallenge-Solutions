//Date: September 16, 2026

/*
Given a string, determine if it has no repeating characters.

A string has no repeats if it does not have the same character two or more times in a row.
*/

function hasNoRepeats(str) {
    for(let i = 0; i < str.length;i++){
        if((str[i] !== str[i+1]) && str[i+1]!== str.length){
            continue;
        } else{
            return false;
        }
    }
    return true;
}

console.log(hasNoRepeats("hi world"));
console.log(hasNoRepeats("hello world"));
console.log(hasNoRepeats("abcdefghijklmnopqrstuvwxyz"));
console.log(hasNoRepeats("freeCodeCamp"));
console.log(hasNoRepeats("Mississippi"));
console.log(hasNoRepeats("The quick brown fox jumped over the lazy dog."));