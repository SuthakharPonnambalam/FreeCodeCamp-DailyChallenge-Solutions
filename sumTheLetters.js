//Date: September 15, 2026

/*
Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters.
*/

const map = new Map(
  [...'abcdefghijklmnopqrstuvwxyz'].map((letter, index) => [letter, index + 1])
);

function sumLetters(word) {
   word = word.toLowerCase();
    let total = 0;
    for(let i=0;i<word.length;i++){
        if(word.charCodeAt(i)>=97 && word.charCodeAt(i) <=122){
          total += map.get(word[i]);
        } else {
          continue;
        }
        
    }
    return total;
}