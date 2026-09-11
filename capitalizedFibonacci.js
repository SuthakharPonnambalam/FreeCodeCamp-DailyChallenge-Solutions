//Date: September 11, 2026

/*
Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

The first character is at index 0.
If the index of non-letter characters is a Fibonacci number, leave it unchanged.
*/

function capitalizeFibonacci(str) {
    let length = str.length;

    let first = 0;
    let second = 1;
    let arr = [];
    let resultStr = '';
    for(let i = 0; i < length;i++){
        if( i === 0){
            arr.push(first);
        } else if (i === 1) {
            arr.push(second);
        } else {
            arr.push(arr[i-2] + arr[i-1]);
        }
    }

    for(let k = 0; k < str.length;k++){
        if(arr.includes(k)){
            resultStr = resultStr + str[k].toUpperCase();
        } else{
            resultStr = resultStr + str[k].toLowerCase();
        }
    }
    return resultStr;
}

console.log(capitalizeFibonacci("hello world"))