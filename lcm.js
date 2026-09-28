//Date: September 28, 2026

/*
Given two integers, return the least common multiple (LCM) of the two numbers.

The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:

Multiples of 4 are 4, 8, 12 and so on.
Multiples of 6 are 6, 12, 18 and so on.
12 is the smallest number that is a multiple of both.
*/

function lcm(a, b) {
    let i = 1;
    let lcmIsFound = false;
    let lcm = 0;

    while(lcmIsFound === false){
        if(i % a === 0 && i %b === 0){
            lcmIsFound = true;
            lcm = i;
        }else{
            i++;
        }
    }
    return lcm;
}

console.log(lcm(4, 6));