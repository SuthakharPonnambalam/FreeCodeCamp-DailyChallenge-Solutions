//Date: September 29, 2026

/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

function primeSummation(n) {
    let sum = 0;
    for(let i = 2; i < n; i++){
        let primeStatus = checkPrime(i);
        if(primeStatus === true){
            sum = sum + i;
        }
    }
    return sum;
}

const checkPrime = (num) => {
    for(let i = 2; i <= (Math.sqrt(num)); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(primeSummation(10));
console.log(primeSummation(17));
console.log(primeSummation(2001));
console.log(primeSummation(140759));
console.log(primeSummation(2000000));