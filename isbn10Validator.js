//Date: September 16, 2026

/*
Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):

The first 9 characters must be digits, and
The final character may be a digit or the letter "X", which represents the number 10.
To validate it:

Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
Add all the results together.
If the total is divisible by 11, it's valid.
*/

function isValidIsbn10(str) {
    let num = /[0-9]/;
    let cleanedString = str.split('-').join('');
    let sum = 0;
    console.log(cleanedString);
    for(let i =0;i<cleanedString.length;i++){
        //console.log(i);
        if(i!== cleanedString.length-1){
            sum = sum + Number(cleanedString[i] * (i+1));
        }
        else {
            if(cleanedString[i] === 'X'){
                sum = (sum + 10 * 10);
            } else if(Number(cleanedString[i]) >=0 && Number(cleanedString[i]) <=9 ){
                sum = sum + Number(cleanedString[i] * (i+1));
            } else{}
        }
    }
    console.log(sum);
    return (sum % 11 === 0)? true: false;
}

console.log(isValidIsbn10("0-306-40615-2"));
console.log(isValidIsbn10("0-306-40615-1"));
console.log(isValidIsbn10("0-8044-2957-X"));