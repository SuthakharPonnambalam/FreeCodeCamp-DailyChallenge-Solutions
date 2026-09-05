//Date: September 05, 2026

/*
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.
*/

function isValidIPv4(ipv4) {
    let result = new Set();

    let ipArray = ipv4.split('.');
    if(ipArray.length !== 4){
        return false;
    }
    for(let i = 0; i < ipArray.length;i++){
        let num = Number(ipArray[i]);
        num = num * 1;
        let strNum = String(num);
        if(ipArray[i] !== strNum){
            return false;
        }else{
            if(num >= 0 && num <= 255){
                result.add(true);
            }
            else {
                return false;
            }
        }
    }
    if(result.size === 1){
        return true;
    }
}

console.log(isValidIPv4("192.168.1.1"));
console.log(isValidIPv4("0.0.0.0"));
console.log(isValidIPv4("255.01.50.111"));
console.log(isValidIPv4("255.00.50.111"));
console.log(isValidIPv4("256.101.50.115"));
console.log(isValidIPv4("192.168.101."));
console.log(isValidIPv4("192168145213"));