//Date: September 1, 2026
/*
Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:

Divide each channel [R, G, B] by 255 to get a value between 0 and 1
Apply the gamma correction formula to each channel:
If the channel value is less than or equal to 0.04045: channel / 12.92
Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B
Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0

*/

function getContrastRating(rgb1, rgb2, isLargeText) {

    let l1 = calculateLuminance(rgb1);
    let l2 = calculateLuminance(rgb2);
    //console.log(l1, l2);

    l1 = Number(l1) + 0.05;
    l2 = Number(l2) + 0.05;

    let ratio = Number((l1/l2).toFixed(2));
    //console.log(ratio);
    switch(isLargeText){
        case true:
        if(ratio >= 4.5){
            return 'AAA';
        } else if(ratio >= 3.0){
            return 'AA';
        } else {
            return 'Fail';
        }

        case false:
        if(ratio >= 7.5){
            return 'AAA';
        } else if(ratio >= 4.5){
            return 'AA';
        } else {
            return 'Fail';
        }
}

}

const calculateLuminance = (rgb1) => {
    let red = rgb1[0];
    let green = rgb1[1];
    let blue = rgb1[2];

    red = gammaCorrection(red);
    green = gammaCorrection(green);
    blue = gammaCorrection(blue);
    
    let luminance = Number((0.2126 * red) + (0.7152 * green)+ (0.0722 * blue)).toFixed(2);
    return luminance;
}

const gammaCorrection = (color) => {
    color = Number((color/255).toFixed(5));
    if(color <= 0.04045){
        color = Number(color/12.92).toFixed(5);
    }
    else {
        color = Number(((color + 0.055) / 1.055)).toFixed(3);
        color = Math.pow(color, 2.4);
    }
    return color;
}

console.log(getContrastRating([255, 255, 255], [0, 0, 0], false));
console.log(getContrastRating([215, 188, 188], [55, 55, 55], false));
console.log(getContrastRating([143, 144, 210], [46, 47, 61], false));
console.log(getContrastRating([135, 147, 155], [60, 70, 90], true));