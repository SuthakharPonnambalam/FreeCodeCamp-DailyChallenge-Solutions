//Date: September 22, 2026

/*
Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

Start with a #, and
be followed by either 3 or 6 hexadecimal characters.
Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).
*/

function isValidHex(str) {
    let regex = /[0-9a-fA-F]/;
    if(str[0] !== '#' || str.length > 7){
        return false;
    }
    for(let i = 1; i < str.length; i++){
        if(str[i].match(regex)){
            continue;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isValidHex("#123"));