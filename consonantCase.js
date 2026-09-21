//Date: September 21, 2026

/*
Given a string representing a variable name, convert it to consonant case using the following rules:

All consonants should be converted to uppercase.
All vowels (a, e, i, o, u in any case) should be converted to lowercase.
All hyphens (-) should be converted to underscores (_).
*/

function toConsonantCase(str) {
    str = str.toLowerCase();
    let result = ' ';
    for(let i = 0;i<str.length;i++){ 
        if(str[i] === '-') {
            result += '_';
        } else if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u'){
            result += str[i].toUpperCase();
        }
        else {
            result += str[i].toLowerCase();
        }
    }
    return result.trim();
}

console.log(toConsonantCase("vowelcase"));
console.log(toConsonantCase("helloworld"));
console.log(toConsonantCase("HELLOWORLD"));
console.log(toConsonantCase('-_--'));
console.log(toConsonantCase("_hElLO-WOrlD-"));