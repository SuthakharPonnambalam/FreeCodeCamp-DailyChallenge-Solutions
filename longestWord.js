//Date: September 27, 2026

/*
Given a sentence string, return the longest word in the sentence.

Words are separated by a single space.
Only letters (a-z, case-insensitive) count toward the word's length.
If there are multiple words with the same length, return the first one that appears.
Return the word as it appears in the given string, with punctuation removed.
*/

let cleanedWords = [];

function longestWord(sentence) {
    let arr = sentence.split(' ');
    let lengths = [];

    for(let i = 0; i < arr.length;i++){
        let length = getLen(arr[i]);
        lengths.push(length);
    }
    //console.log(lengths);

    let max = 0;
    let pos = 0;
    for(let i = 0; i < lengths.length;i++){
        if(lengths[i] > max){
            max = lengths[i];
            pos = i;
        }
    }
    let result = cleanedWords[pos];
    cleanedWords = [];
    return result;
}

const getLen = (word) => {
    let result = '';
    let regex = /[a-zA-Z]/;
    for(let i = 0; i < word.length;i++){
        if(word[i].match(regex)){
            result += word[i];
        } else{
            continue
        }
    }
    cleanedWords.push(result);
    return result.length;
}

console.log(longestWord("Hello coding challenge."));
console.log(longestWord("The quick red fox"));
console.log(longestWord("Do Try This At Home."));
console.log(longestWord("This sentence... has commas, ellipses, and an exclamation point!"));
console.log(longestWord("A tie? No way!"));
console.log(longestWord("Wouldn't you like to know."));