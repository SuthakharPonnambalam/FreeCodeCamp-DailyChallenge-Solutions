//Date: September 28, 2026

/*
Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.
*/

function gcd(x, y) {
    let gcd1 = getFactors(x);
    let gcd2 = getFactors(y);
    //console.log(gcd1, gcd2);

    let max = 0;
    for(let i = 0; i < gcd1.length;i++){
        if(gcd2.includes(gcd1[i])){
            //console.log(gcd1[i], gcd2[i]);
            if(gcd1[i] > max){
                max = gcd1[i];
            }else{
                continue;
            }
        }
    }
    return max;
}

const getFactors = (num) => {
    let arr = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            arr.push(i);
        } 
    }
    return arr;
}

console.log(gcd(4, 6));
console.log(gcd(20, 15));
console.log(gcd(13, 17));
console.log(gcd(654, 456));
console.log(gcd(3456, 4320));