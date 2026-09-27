//Date: September 27, 2026

/*
Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

3 with "Fizz".
5 with "Buzz".
3 and 5 with "FizzBuzz".
*/

function fizzBuzz(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('FizzBuzz');
        } else if(i % 3 === 0){
            arr.push('Fizz');
        } else if(i % 5 === 0){
            arr.push('Buzz');
        } else{
            arr.push(i);
        }
    }
    return arr;
}

console.log(fizzBuzz(2));
console.log(fizzBuzz(8));