//Date: September 21, 2026

/*
Given a positive integer, return "Odd" if it's an odd number, and "Even" if it's even.
*/

function oddOrEven(n) {
  if(n % 2 === 0){
    return 'Even';
  }
  return 'Odd';
}

console.log(oddOrEven(3));