//Date: August 30, 2026

/*
Given a string, return a jumbled version of that string where each word is transformed using the following constraints:
The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.
*/

function jbelmu(text) {
    let resultString = '';
    let stringArray = text.split(' ');
    for(const word of stringArray){
        if(word.length === 1){
            let finalString = `${word}`;
            resultString += finalString + ' ';
        } else {
        let firstChar = word.slice(0, 1);
        //console.log(firstChar);
        let lastChar = word.slice(word.length-1);
        //console.log(lastChar);
        let restOfString = word.slice(1, word.length-1);
        //console.log(restOfString);
        let arr = restOfString.split('');
        arr = arr.sort().join('');
        let finalString = `${firstChar}${arr}${lastChar}`;
        resultString += finalString + ' ';
        }
    }
    return resultString.trim();
}

console.log(jbelmu("hello world"));
console.log(jbelmu("i love jumbled text"));
console.log(jbelmu("freecodecamp is my favorite place to learn to code"));
console.log(jbelmu("the quick brown fox jumps over the lazy dog"));
