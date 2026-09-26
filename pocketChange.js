//Date: September 17, 2026

/*
Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format "$D.CC".

100 cents equals 1 dollar.
In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents
*/

function countChange(change) {
    let cents = 0;
    for(let i = 0; i < change.length; i++){
        cents += change[i];
    }
    let dollars = Math.floor(cents/100);
    let remCents = (cents%100);
    if(remCents < 10){
        remCents = `0${remCents}`;
    }

    return `$${dollars}.${remCents}`;
}

console.log(countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]));
console.log(countChange([100, 25, 100, 1000, 5, 500, 2000, 25]));
console.log(countChange([1]));
console.log(countChange([25, 25, 25, 25]));