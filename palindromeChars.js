//Date: September 11, 2026

/*
Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

A palindrome is a string that is the same forward and backward.
If it's not a palindrome, return "none".
*/

function palindromeLocator(str) {
    let reverseStr = str.split('').reverse().join('').trim();
    //console.log(reverseStr);

    let length = str.length;
    let chars;
    if(length % 2 !== 0){
        chars = str[Math.floor(length/2)];
    } else {
        let middle = Math.floor(length/2);
        chars = str.slice(middle-1, middle+1);
        //console.log(chars);
    }

    if(str === reverseStr){
        return chars;
    } else {
        return 'none';
    }
}

console.log(palindromeLocator("racecar"));
console.log(palindromeLocator('noon'));
console.log(palindromeLocator("level"));