//Date: September 1, 2026

/*
Given a contrast ratio and a boolean indicating whether the text is large, return the WCAG rating using the following table:

Rating	Normal Text	Large Text
"AAA"	7.0+	4.5+
"AA"	4.5+	3.0+
"Fail"	below 4.5	below 3.0
*/


function getContrastRating(ratio, isLargeText) {
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

console.log(getContrastRating("7.5", false));
console.log(getContrastRating("4.8", false));
console.log(getContrastRating("4.2", false));
console.log(getContrastRating("3.0", true));
console.log(getContrastRating("2.7", false));

