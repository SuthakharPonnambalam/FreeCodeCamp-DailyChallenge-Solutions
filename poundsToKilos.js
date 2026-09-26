//Date: September 25, 2026

/*
Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".

Replace "(lbs)" with the input number.
Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
1 pound equals 0.453592 kilograms.
If the input is 1, use "pound" instead of "pounds".
If the converted value is 1, use "kilogram" instead of "kilograms".
*/

function convertToKgs(lbs) {
    let conversionRate = 0.453592;
    let result = (lbs * conversionRate).toFixed(2);

    let str = ' ';
    let poundPart = '';
    if(lbs === 1){
        poundPart = `${lbs} pound`;
    } else {
        poundPart = `${lbs} pounds`;
    }

    let kgPart = '';
    if(result === '1.00'){
        kgPart = `${result} kilogram`;
    } else{
        kgPart = `${result} kilograms`;
    }

    str = `${poundPart} equals ${kgPart}.`;
    return str.trim();

}

console.log(convertToKgs(1));
console.log(convertToKgs(0));
console.log(convertToKgs(100));
console.log(convertToKgs(2.20462));
console.log(convertToKgs(2.5));