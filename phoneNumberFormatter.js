//Date: September 28, 2026

/*
Given a string of eleven digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
*/

function formatNumber(number) {
    if(number.length < 11){
        return 'Not a valid phone number.'
    } else {
        let countryCode = number[0];
        let areaCode = number.slice(1, 4);
        let digitsPartOne = number.slice(4, 7);
        let digitsPartTwo = number.slice(7);

        return `+${countryCode} (${areaCode}) ${digitsPartOne}-${digitsPartTwo}`;
    }
}

console.log(formatNumber("05552340182"));