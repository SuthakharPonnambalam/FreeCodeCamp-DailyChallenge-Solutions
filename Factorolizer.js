//Date: August 28, 2026
//Task: Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

function factorial(n) {
  let prod = 1;
  for(let i = 1; i<=n;i++){
    prod = prod * i;
  }
  return prod;
}