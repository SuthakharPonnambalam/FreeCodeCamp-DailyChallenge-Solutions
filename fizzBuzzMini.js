//Date: September 22, 2026

/*
Given an integer, return a string based on the following rules:

If the number is divisible by 3, return "Fizz".
If the number is divisible by 5, return "Buzz".
If the number is divisible by both 3 and 5, return "FizzBuzz".
Otherwise, return the given number as a string.
*/

function fizzBuzzMini(n) {
    if(n%3 === 0 && n%5 === 0){
        return 'FizzBuzz';
    } else if(n%3 === 0) {
        return 'Fizz';
    } else if(n%5 === 0){
        return 'Buzz';
    } else {
        return String(n);
    }
}

console.log(fizzBuzzMini(75))