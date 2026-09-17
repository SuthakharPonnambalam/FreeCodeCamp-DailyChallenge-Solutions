//Date: September 17, 2026

/*
Given a string, return a URL-friendly version of the string using the following constraints:

All letters should be lowercase.
All characters that are not letters, numbers, or spaces should be removed.
All spaces should be replaced with the URL-encoded space code %20.
Consecutive spaces should be replaced with a single %20.
The returned string should not have leading or trailing %20.
*/

function generateSlug(str) {
    str = str.trim();
    let result = ' ';
    let letterRegex = /[a-zA-Z]+/;
    let spaceRegex = /\s+/g;
    let numRegex = /[0-9]+/;
    for(let i = 0; i < str.length; i++){
        if(str[i].match(letterRegex)){
            result += str[i].toLowerCase();
        } else if(str[i].match(spaceRegex)){
            result += '%20';
            while(str[i + 1] === ' ') {
                i++;
            }
        } else if(str[i].match(numRegex)) {
            result += str[i];
        } else {
            result = result;
        }
    }
    return result.trim();
}

console.log(generateSlug("helloWorld"));
console.log(generateSlug("hello world!"));
console.log(generateSlug(" hello-world "));
console.log(generateSlug("hello  world"));
console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  "));