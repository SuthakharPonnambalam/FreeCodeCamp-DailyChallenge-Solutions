//Date: October 2, 2026

/*
Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.

Hexadecimal is a number system that uses 16 digits:

0-9 represent values 0 through 9.
A-F represent values 10 through 15.
*/

let map = new Map();

for (let i = 0; i < 6; i++) {
    let letter = String.fromCharCode(65 + i); 
    map.set(letter, 10+i);            
}

function hexToDecimal(hex) {
    let decimal = 0;
    let letterRegex = /[ABCDEF]/;
    let count  = 0;
    for(let i = hex.length-1 ; i >= 0;i--){
        if(hex[i].match(letterRegex)){
            let val = map.get(hex[i]);
            decimal = decimal + (Math.pow(16, count) * val);
        }else{
            let val = Number(hex[i]);
            decimal = decimal + (Math.pow(16, count) * val);
        }
        count += 1;
    }
    return decimal;
}

console.log(hexToDecimal('2E'));
console.log(hexToDecimal('15'));

