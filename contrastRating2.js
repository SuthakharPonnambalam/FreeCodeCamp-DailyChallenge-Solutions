//Date: September 1, 2026

/*
Given two relative luminance values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

Calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0
*/

function getContrastRating(l1, l2, isLargeText) {
    l1 = l1 + 0.05;
    l2 = l2 + 0.05;
    let ratio = Number((l1/l2).toFixed(2));
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
console.log(getContrastRating(1.0, 0.0, false));
console.log(getContrastRating(0.9015, 0.1364, false));
console.log(getContrastRating(0.8965, 0.1628, false));
console.log(getContrastRating(0.7469, 0.0957, true));