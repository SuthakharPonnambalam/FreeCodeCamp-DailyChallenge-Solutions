//Date: September 7, 2026

/*
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.
*/

function parseRomanNumeral(numeral) {
    let arr = numeral.split('');
    let values = [];
    for(let i = 0; i < arr.length;i++){
        let temp = getValue(arr[i]);
        values.push(temp);
    }
    //console.log(values);
    let total = 0;
    for(let j = 0; j < values.length; j++){
        if(values[j+1] > values[j]){
            total = total - values[j];
            //console.log(total);
        } else {
            total += values[j];
            //console.log(total);
        }
    }
    return total;
}

const getValue = (char) => {
    switch(char){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
    }
}

console.log(parseRomanNumeral("III"));
console.log(parseRomanNumeral("IV"));
console.log(parseRomanNumeral("XCIX"));