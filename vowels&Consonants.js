//Date: September 26, 2026

/*
Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].
*/

function count(str) {
    str = str.toLowerCase();
    let vowelRegex = /[aeiou]/;
    let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/;

    let vCount = 0, cCount = 0;
    for(let i = 0; i < str.length;i++){
        if(str[i].match(vowelRegex)){
            vCount++;
        } else if(str[i].match(consonantRegex)){
            cCount++;
        } else {
            continue;
        }
    }
    let arr = [vCount, cCount];
    return arr;
}

console.log(count("Python"));