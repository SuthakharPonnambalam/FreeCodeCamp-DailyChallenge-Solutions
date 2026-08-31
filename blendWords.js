//Date: August 31, 2026

/*
Given two words, return a new word by combining the first half of the first word with the second half of the second word.
For odd-length words, the first half is the shorter half.
*/

function blendWords(word1, word2) {
    let blendedWord = '';
    let partOne = cutWord(word1, 1);
    let partTwo = cutWord(word2, 2);
    return `${partOne}${partTwo}`;
}

const cutWord = (word, pos) => {
    let length = word.length;
    let partWord;
    if(pos === 1){
        let partOne;
        if(length%2 === 0){
            partWord = word.slice(0, length/2);
        } else{
            partWord = word.slice(0, (length/2));
        }
    } else if(pos === 2){
        if(length%2 === 0){
            partWord = word.slice(length/2);
        } else {
            partWord = word.slice(Math.floor(length/2));
        }
    } else {}
    return partWord;
}

console.log(blendWords("turtle", "toucan"));
console.log(blendWords("chipmunk", "flamingo"));
console.log(blendWords("falcon", "pelican"));
console.log(blendWords("hyena", "iguana"));
console.log(blendWords("scorpion", "gorilla"));
console.log(blendWords("platypus", "wolverine"));