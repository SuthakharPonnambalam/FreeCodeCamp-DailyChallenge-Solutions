//Date: September 16, 2026

/*
Given a string of words, return a new string where each word is replaced by its length.

Words in the given string will be separated by a single space
Keep the spaces in the returned string.
For example, given "hello world", return "5 5".
*/

function convertWords(str) {
    let count = ' ';
    let arr = str.split(' ');
    for(let i =0; i < arr.length;i++){
        let length = arr[i].length;
        count = count + String(length) + ' ';
    }
    return count.trim();
}

console.log(convertWords("hello hello"));