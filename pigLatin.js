//Date: August 31, 2026

/*
Given a string, convert it to Pig Latin using the following rules:

If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".
*/

function pigLatin(str) {
    let result = '';
    let strArray = str.split(' ');
    for(let i = 0; i < strArray.length;i++){
        let word = pigLatinMix(strArray[i]);
        result = result + word + ' ';
    }
    return result.trim();
}

const pigLatinMix = (word) => {
    let result = '';
    let firstChar = word[0];
    if(word[0] === 'a' || word[0] === 'e' || word[0] === 'i' ||
    word[0] === 'o' || word[0] === 'u' || word[0] === 'A' || word[0] === 'E'
    || word[0] === 'I' || word[0] === 'O' || word[0] === 'U'){
        result = `${word}way`;
    } else {
       let charCode = word.charCodeAt(0);
       for(let i = 0; i < word.length; i++){
        //console.log(word[i]);
        if(word[i] !== 'a' && word[i] !== 'e' && word[i] !== 'i' && word[i] !== 'o' && word[i] !== 'u'){
           
        }
        else {
            let firstChar;
            if(charCode >=65 && charCode <= 90){
                firstChar = word.charAt(i).toUpperCase();
            } else {
                firstChar = word.charAt(i);
            }
            //console.log(firstChar);
            let firstPart = word.slice(0,i).toLowerCase()
            let secondPart = word.slice(i+1);
            result = firstChar + secondPart + firstPart +'ay';
            break;
            //console.log(result);
        }
    }
    }
    return result;
}

console.log(pigLatin("universe"));
console.log(pigLatin("hello"));
console.log(pigLatin("hello universe"));
console.log(pigLatin("Hello universe"));
console.log(pigLatin("Pig Latin is fun"));
console.log(pigLatin("The quick brown fox jumped over the lazy dog"));