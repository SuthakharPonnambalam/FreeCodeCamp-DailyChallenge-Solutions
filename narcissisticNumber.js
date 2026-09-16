//Date: September 04, 2026

/*
Given a positive integer, determine whether it is a narcissistic number.

A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.
For example, 153 has 3 digits, and 13 + 53 + 33 = 153, so it is narcissistic.
*/

function isNarcissistic(n) {
    let total = 0, copyNum = n;
    let length = String(n).length;
    console.log(length);
    while(n > 0){
        let rem = n %10;
        total = total + (Math.pow(rem, length));
        n = Math.floor(n/10);
    }
    if(total === copyNum){
        return true;
    }
    return false;
}

console.log(isNarcissistic(9));