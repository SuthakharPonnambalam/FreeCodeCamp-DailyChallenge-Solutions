//Date: August 30, 2026
/*
Given a string, return its camel case version using the following rules:
Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.
*/

function toCamelCase(s) {
    let resultString = '';
    let stringArray = s.split(/\s|_|-/);
    //console.log(stringArray);
    resultString = stringArray[0].toLowerCase();
    for(let i = 1; i < stringArray.length;i++){
        resultString = resultString + stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1).toLowerCase();
    }
    return resultString;
}

console.log(toCamelCase("hello World how ARE you"));
console.log(toCamelCase("HELLO WORLD"));
console.log(toCamelCase("secret agent-X"));
console.log(toCamelCase("FREE cODE cAMP"));
console.log(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"));