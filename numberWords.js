//Date: September 16, 2026

/*
Given an integer from 0 to 99, return its English word representation.

0 returns "zero".
Numbers 1-19 have unique names ("one", "two", ..., "ten", "eleven", ..., "eighteen", "nineteen").
Multiples of 10 from 20-90 have their own names ("twenty", "thirty", ..., "eighty", "ninety").
Numbers 21-99 that are not multiples of 10 are written as two words joined by a hyphen. For example "forty-two" and "fifty-three".
*/

function getNumberWords(n) {
    if( n < 10){
        return getNum(n);
    } else if(n%10 === 0){
        let quotient = n / 10
        return getNumBase10(quotient);
    } else if (n>=11 && n <=19){
        return getNum(n);
    }
    else {
        let quotient = Math.floor(n /10);
        let rem = n % 10;
        let result = getNumBase10(quotient) + '-' + getNum(rem);
        return result;
    }
}

const getNum  = (n) => {
    switch(n){
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
    }
}

const getNumBase10 = (q) => {
    switch(q){
        case 1: return 'ten';
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'fourty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
    }
}

console.log(getNumberWords(2));
console.log(getNumberWords(10));
console.log(getNumberWords(15));
console.log(getNumberWords(22));