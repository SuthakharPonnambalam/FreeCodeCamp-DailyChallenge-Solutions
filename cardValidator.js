//Date: September 2, 2026
/*
Given a string of digits for a credit card number, determine if it's a valid card number using the following method:

Starting from the second-to-last digit, double every other digit moving left.
If doubling a digit results in a number greater than 9, subtract 9.
Sum all the digits (doubled and undoubled).
If the total is divisible by 10, the number is valid.
*/

function isValidCard(number) {
    let nums = [];
    let flag = false;
    for(let i = number.length-1;i >=0;i--){
        //console.log(i);
        if(flag == false){
            nums.push(Number(number[i]));
            flag = true;
        }else {
            let doubleNum = Number(number[i]) * 2;
            if(doubleNum > 9){
                doubleNum = doubleNum - 9;
            }
            nums.push(doubleNum);
            flag = false;
        }
    }
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    if(sum % 10 === 0){
        return true;
    }
    return false;
}

console.log(isValidCard("4532015112830366"));
console.log(isValidCard("371449635398431"));
console.log(isValidCard("6011111111111117"));
console.log(isValidCard("4532015112830367"));