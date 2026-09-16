//Date: September 15, 2026

/*
Given an array of numbers, return the sum of all the numbers.
*/

function sumArray(numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
