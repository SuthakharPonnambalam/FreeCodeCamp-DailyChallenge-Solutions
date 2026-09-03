//Date: September 3, 2026

/*
Given two strings, return a count of characters from the second string that can be found in the first.

Duplicate characters in the second string are counted separately.
*/

function duplicateCharacterCount(str1, str2) {
    let result = 0;
    for(let i = 0; i < str2.length;i++){
        if(str1.includes(str2[i])){
            result++;
        }
    }
    return result;
}

console.log(duplicateCharacterCount("aloha", "hei"));
console.log(duplicateCharacterCount("jambo", "bonjour"));
console.log(duplicateCharacterCount("ola", "hej"));
console.log(duplicateCharacterCount("hello world", "hello to everyone around the world"));