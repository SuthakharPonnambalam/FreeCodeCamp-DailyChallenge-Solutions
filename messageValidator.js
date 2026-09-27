//Date: September 27, 2026

/*
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.
*/

function isValidMessage(message, validator) {
    message = message.toLowerCase();
    let arr = message.split(' ');

    let res = '';
    for(let i = 0; i < arr.length;i++){
        res += arr[i].charAt(0);
    }

    if(res === validator.toLowerCase()){
        return true;
    }
    return false;
}

console.log(isValidMessage("ALL CAPITAL LETTERS", "acl"));