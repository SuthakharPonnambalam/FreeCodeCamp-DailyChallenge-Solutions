//Date: September 15, 2026

/*
Given a word, return its score using a standard letter-value table:

Letter	Value
A	1
B	2
...	...
Z	26
Upper and lowercase letters have the same value.
*/

const map = new Map(
  [...'abcdefghijklmnopqrstuvwxyz'].map((letter, index) => [letter, index + 1])
);

function getWordScore(word) {
   word = word.toLowerCase();
    let total = 0;
    for(let i=0;i<word.length;i++){
        total += map.get(word[i]);
    }
    return total;
}