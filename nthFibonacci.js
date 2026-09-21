//Date: September 21, 2026

/*
Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
*/

function nthFibonacci(n) {
    let first = 0;
    let second = 1;

    let arr = [];
    for(let i = 0; i < n;i++){
        if(i === 0){
            arr.push(first);
        } else if( i === 1){
            arr.push(second);
        } else {
            let sum = arr[i-2] + arr[i-1];
            arr.push(sum);
        }
    }
    //console.log(arr);
    return arr[arr.length-1];
}

console.log(nthFibonacci(4))