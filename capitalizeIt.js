//Date: September 25, 2026

/*
Given a string title, return a new string formatted in title case using the following rules:

Capitalize the first letter of each word.
Make all other letters in each word lowercase.
Words are always separated by a single space.
*/

function titleCase(title) {
    title = title.toLowerCase();
    let result = ' ';
    let arr = title.split(' ');
    for(let i = 0; i < arr.length;i++){
        let word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
        result += word +' ';
    }
    return result.trim();
}

console.log(titleCase("hello world"));