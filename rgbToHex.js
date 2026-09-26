//Date: September 2, 2026

/*
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.
*/

function rgbToHex(rgb) {
    let rgbValue = rgb.slice(rgb.indexOf('('));
    let actualRGBValues = rgbValue.slice(1, rgbValue.length-1);
    let rgbArray = actualRGBValues.split(',');
    let [red, green, blue] = rgbArray;
    
    let redCode = getHex(red);
    let greenCode = getHex(green);
    let blueCode = getHex(blue);

    return `#${redCode}${greenCode}${blueCode}`;
}

const getHex = (color) => {
    color = Number(color.trim());
    let quotient = Math.floor(color/16);
    let rem = color%16;
    quotient = getHexValue(quotient);
    rem = getHexValue(rem);
    return `${quotient}${rem}`;
}

const getHexValue = (num) => {
    switch(num){
        case 0: return '0';
        case 1: return '1';
        case 2: return '2';
        case 3: return '3';
        case 4: return '4';
        case 5: return '5';
        case 6: return '6';
        case 7: return '7';
        case 8: return '8';
        case 9: return '9';
        case 10: return 'a';
        case 11: return 'b';
        case 12: return 'c';
        case 13: return 'd';
        case 14: return 'e';
        case 15: return 'f';
    }
}

console.log(rgbToHex("rgb(255, 255, 255)"));
console.log(rgbToHex("rgb(1, 11, 111)"));
console.log(rgbToHex("rgb(173, 216, 230)"));
console.log(rgbToHex("rgb(79, 123, 201)"));
