//Date: September 25, 2026

/*
Given a string and a target number, determine whether the string contains exactly the target number of consonants.

Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.
*/

function hasConsonantCount(text, target) {
    let count = 0;
    let regex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
    for(let i = 0; i < text.length;i++){
        if(text[i].match(regex)){
            count++;
        } else{
            continue;
        }
    }
    //console.log(count);
    if(count === target){
        return true;
    }
    return false;
}

console.log(hasConsonantCount("helloworld", 7));
console.log(hasConsonantCount("freeCodeCamp Rocks!", 11));
console.log(hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24));