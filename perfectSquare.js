//Date: September 24, 2026

/*
Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.
*/

function isPerfectSquare(n) {
    let prod;
    if(n === 1 || n === 0){
        return true;
    }
    for(let i = 1; i <= Math.floor(n/2);i++){
        prod = i * i;
        if(prod === n){
            return true;
        }
    }
    return false;
}

console.log(isPerfectSquare(9));
console.log(isPerfectSquare(49));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(-9));
console.log(isPerfectSquare(25281));