//Date: September 23, 2026

/*
Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.
For example, given "yes yes yes please", return "yes(3) please".
*/

function compressString(sentence) {
    let map = new Map();
    let arr = sentence.split(' ');
    for(let i = 0; i < arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let result = ' ';
    for(const [key, value] of map){
        if(value === 1){
            result += key+" ";
        } else {
            result += `${key}(${value}) `;
        }
    }
    return result.trim();
}

console.log(compressString("yes yes yes please"));
console.log(compressString("I have have have apples"));