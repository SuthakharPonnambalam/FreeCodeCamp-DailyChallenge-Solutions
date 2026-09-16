//Date: September 11, 2026

/*
Given a string of words, return only the words with an odd number of letters.

Words in the given string will be separated by a single space.
Return the words separated by a single space.
*/

function getOddWords(str) {
    let arr = str.split(' ');
    let res = '';
    for(let i = 0; i < arr.length;i++){
        let strlength = arr[i].length;
        if(strlength % 2 !== 0){
            res = res + arr[i] + ' ';
        }
    }
    return res.trim();
}

console.log(getOddWords("This is a super good test"));
console.log(getOddWords("banana split sundae with rainbow sprinkles on top"));
console.log(getOddWords("The quick brown fox jumped over the lazy river"));