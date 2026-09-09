//Date: September 8, 2026

/*
Given two strings, return a new string that interleaves their characters one at a time. If one string is longer, append the remaining characters at the end.

Begin with the first character of the first string.
*/

function zipStrings(a, b) {
    let result = '';
    let len1 = a.length;
    let len2 = b.length;
    let max = 0;
    (len1 >= len2) ? max = len1: max = len2;

    for(let i = 0; i < max;i++){
        //console.log(i);
        if(i >= a.length){
            result = result + b.slice(i);
            break;
        } else if ( i >= b.length){
            result = result + a[i];
            break;
        } else {
            result = result + a[i] + b[i];
        }
    }
   return (result);
}

console.log(zipStrings("abc", "123"));
console.log(zipStrings("day", "night"));
console.log(zipStrings("python", "javascript"));