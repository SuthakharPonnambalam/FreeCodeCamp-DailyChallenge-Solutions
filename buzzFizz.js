//Date: September 27, 2026

/*
Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array. A sequence is correct if:

Numbers that are multiples of 3 are replaced with "Fizz"
Numbers that are multiples of 5 are replaced with "Buzz"
Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
All other numbers remain as integers in ascending order, starting from 1.
The array must start at 1 and have no missing or extra elements.
*/

function isFizzBuzz(sequence) {
    let arr = [];
    for(let i = 1 ; i<=sequence.length;i++){
        if(i %3 === 0 && i%5 === 0){
            arr.push('FizzBuzz');
        } else if(i%3 === 0){
            arr.push('Fizz');
        } else if(i%5 === 0){
            arr.push('Buzz');
        } else {
            arr.push(i);
        }
    }

    for(let j = 0; j < sequence.length;j++){
        if(sequence[j] === arr[j]){
            continue;
        } else{
            return false;
        }
    }
    return true;
}

console.log(isFizzBuzz([1, 2, "Fizz", 4]));
console.log(isFizzBuzz([1, 2, 3, 4]));