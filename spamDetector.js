//Date: September 27, 2026

/*
Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

A represents the country code and can be any number of digits.
BBB represents the area code and will always be three digits.
CCC and DDDD represent the local number and will always be three and four digits long, respectively.
Determine if it's a spam number based on the following criteria:

The country code is greater than 2 digits long or doesn't begin with a zero (0).
The area code is greater than 900 or less than 200.
The sum of first three digits of the local number appears within last four digits of the local number.
The number has the same digit four or more times in a row (ignoring the formatting characters).
*/

function isSpam(number) {
    let arr = number.split(' ');
    //console.log(arr);
    const getCountryCodeStatus = checkCountryCode(arr[0]);
    //console.log(getCountryCodeStatus);

    const getAreaCodeStatus = checkAreaCode(arr[1]);
    //console.log(getAreaCodeStatus);

    const getNumberStatus = checkNumber(arr[1], arr[2]);
    //console.log(getNumberStatus);

    return getCountryCodeStatus || getAreaCodeStatus || getNumberStatus;
}

const checkCountryCode = (code) => {
    if(code.length > 3){
        return true;
    } else {
        let codeNum = code.slice(1);
        if(codeNum[0] !== '0'){
            return true;
        }
        return false;
    }
}

const checkAreaCode = (areaCode) => {
    let areaCodeValue = Number(areaCode.slice(1, areaCode.length-1));
    if(areaCodeValue < 200 || areaCodeValue > 900){
        return true;
    }
    return false;
}

const checkNumber = (code, num) => {
    let numRegex = /[0-9]/;
    let localNumSet1 = num.slice(0, num.indexOf('-'));
    let localNumSet2 = num.slice(num.indexOf('-')+1);

    let sumOfSet1 = 0;
    for(let i = 0; i < localNumSet1.length;i++){
        sumOfSet1 = sumOfSet1 + Number(localNumSet1[i]);
    }
    if(localNumSet2.includes(String(sumOfSet1))){
        return true;
    }

    let digits = code.slice(1,code.length-1) + localNumSet1 + localNumSet2;
    //console.log(digits);
    for(let i = 0; i < digits.length;i++){
        let temp = digits.slice(i, i+4);
        if(temp.length === 4){
            let set = new Set(temp.split(''));
            if(set.size === 1){
                return true;
            }
        }
    }
    return false;
}

console.log(isSpam("+0 (200) 234-0182"));
console.log(isSpam("+091 (555) 309-1922"));
console.log(isSpam("+1 (555) 435-4792"));
console.log(isSpam("+0 (955) 234-4364"));
console.log(isSpam("+0 (155) 131-6943"));
console.log(isSpam("+0 (555) 135-0192"));
console.log(isSpam("+0 (555) 564-1987"));
console.log(isSpam("+00 (555) 234-0182"));