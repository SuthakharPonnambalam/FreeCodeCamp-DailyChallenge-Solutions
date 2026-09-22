//Date: September 22, 2026

/*
Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).
*/

function isIntegerHypotenuse(a, b) {
    let cSquared = Math.pow(a, 2) + Math.pow(b, 2);
    let c = Math.sqrt(cSquared);

    if(Number.isInteger(c)){
        return true;
    }
    return false;
}

console.log(isIntegerHypotenuse(3, 4));