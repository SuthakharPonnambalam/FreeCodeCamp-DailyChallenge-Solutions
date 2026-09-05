//Date: September 04, 2026

/*
Given a string, determine if it is a valid ISBN-13 number.

A valid ISBN-13:

Contains only digits and hyphens
Has exactly 13 digits after removing hyphens
Passes the following check:
Multiply each digit by 1 or 3, alternating (multiply the first digit by 1, the second by 3, the third by 1, and so on).
The sum of the results must be divisible by 10.
*/


function isValidIsbn13(str) {
    let numArray = str.split('-');
    let result = '';
    for(let i = 0; i < numArray.length;i++){
        result = result + numArray[i];
    }
    if(result.length > 13){
        return false;
    }
    result = Number(result);
    if(Number.isNaN(result) === false){
        let strNum = String(result);
        let total = 0;
        for(let j = 0; j < strNum.length;j++){
            if(j % 2 === 0){
                let num = Number(strNum[j]);
                //console.log(num);
                total = total + (num * 1);
            } else {
                let num2 = Number(strNum[j]);
                //console.log(num2);
                total = total + (num2 * 3);
            }
        }
        if(total % 10 === 0){
            return true;
        }
        return false;
    }else{
        return false;
    }
}

console.log(isValidIsbn13("9780306406157"));
console.log(isValidIsbn13("97803064061570"));
console.log(isValidIsbn13("978-0-13-595705-9"));
console.log(isValidIsbn13("978-030-64061A-4"));
console.log(isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9"));