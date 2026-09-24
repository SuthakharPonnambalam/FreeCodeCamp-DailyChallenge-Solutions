//Date: September 23, 2026

/*
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places.
Remove unnecessary trailing zeros from the rounded result.
*/

function convertToKm(miles) {
    let oneMile = 1.60934;
    let kms = (miles * oneMile).toFixed(2);
    //console.log(kms);

    let split = kms.split('.');
    let fraction = split[1];
    let result = ' ';
    for(let i = 0; i < fraction.length;i++){
        if(fraction[i] === '0'){
            continue;
        } else{
            result += fraction[i];
        }
    }
    result = result.trim();
    if(result !== ''){
        return `${split[0]}.${result}`;
    }
    return `${split[0]}`;
}

console.log(convertToKm(21));
console.log(convertToKm(3.5));
console.log(convertToKm(0.621371));
console.log(convertToKm(1));
console.log(convertToKm(0));