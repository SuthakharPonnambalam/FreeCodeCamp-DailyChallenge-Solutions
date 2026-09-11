//Date: September 3, 2026

/*
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.
*/

function isPangram(sentence, letters){
    sentence = sentence.toLowerCase();
    let result = new Set();
    let extraChars = new Set();
    let lettersLength = letters.length;
    for(let i = 0; i < sentence.length;i++){
        let charCode = sentence.charCodeAt(i);
    //console.log(charCode);
        if(charCode >=97 && charCode <= 122) 
        {
            if(letters.includes(sentence[i])){
                result.add(sentence[i]);
            } 
            else{
                extraChars.add(sentence[i]);
            }
        }
    }
    //console.log(result);
    //console.log(extraChars)
    if(result.size === lettersLength && extraChars.size === 0){
        return true;
    } else if(result.size < lettersLength){
        return false;
    } else if(result.size === lettersLength && extraChars.size !== 0){
        return false;
    }
}
console.log(isPangram("Hello World!", "helowrd"));
console.log(isPangram("hello", "helo"));
console.log(isPangram("hello", "helow"));
console.log(isPangram("hello", "hel"));
console.log(isPangram("hello world", "helowrd"));
console.log(isPangram("Hello World!", "heliowrd"));
console.log(isPangram("freeCodeCamp", "frcdmp"));
console.log(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"));
