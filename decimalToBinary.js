//Date: September 28, 2026

/*
Given a non-negative integer, return its binary representation as a string.

A binary number uses only the digits 0 and 1 to represent any number. To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainder. Repeat until the number is zero. Read the remainders last recorded to first.
*/

function toBinary(decimal) {

  let res = '';
  while (decimal > 0){
    let rem = decimal % 2;
    res += String(rem);
    decimal = Math.floor(decimal/2);
  }
  return res.split('').reverse().join('');
}

console.log(toBinary(12));