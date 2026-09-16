//Date: September 1, 2026
/*
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.
*/


function tribonacciSequence(startSequence, length) {
    let sum = 0;
    let arr = [];
    let first = startSequence[0];
    let second = startSequence[1];
    let third = startSequence[2];
    if(length === 0){
        return arr;
    }
    for(let i = 0;i < length;i++){
        if(i === 0){
            arr.push(first);
        } else if(i === 1){
            arr.push(second);
        } else if(i === 2){
            arr.push(third);
        } else{
            sum = arr[i-3] + arr[i-2] + arr[i-1];
            arr.push(sum);
        }
    }
return arr;
}

console.log(tribonacciSequence([0, 0, 1], 20));