//Date: September 26, 2026

/*
Given a string containing digits and other characters, return the sum of all numbers in the string.

Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
Ignore any non-digit characters.
*/

function stringSum(str) {
    let sum = 0;
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
            let temp = str[i];
            i++;
            while(str.charCodeAt(i) >=48 && str.charCodeAt(i)<=57){
                temp = temp + str[i];
                i++;
            }

            sum = sum + Number(temp);
        }
    }
    return sum;
}

console.log(stringSum("a12b3"));
console.log(stringSum("3apples2bananas"));
console.log(stringSum("10cats5dogs2birds"));
console.log(stringSum("a1b20c300"));