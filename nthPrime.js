//Date: September 29, 2026

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function nthPrime(n) {
    let arr = [];

    let i = 2;
    while(arr.length <= n){
        let primeStatus = checkPrime(i);
        if(primeStatus === true){
            arr.push(i);
        }
        i++;
    }
    return arr[n-1];
}

const checkPrime = (num) => {
    for(let i = 2; i <= (Math.sqrt(num)); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(nthPrime(10));
console.log(nthPrime(6));
console.log( nthPrime(10001));