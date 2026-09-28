//Date: September 27, 2026

/*
Given a string representing a binary number, return its decimal equivalent as a number.

A binary number uses only the digits 0 and 1 to represent any number. To convert binary to decimal, multiply each digit by a power of 2 and add them together. Start by multiplying the rightmost digit by 2^0, the next digit to the left by 2^1, and so on. Once all digits have been multiplied by a power of 2, add the result together.
*/

function toDecimal(binary) {
    let num = 0;
    let j = 0;
    for(let i = binary.length-1; i >= 0; i--){
        num = num + (Number(binary[i]) * Math.pow(2, j));
        j++;
    }
    return num;
}

console.log(toDecimal("1010"));