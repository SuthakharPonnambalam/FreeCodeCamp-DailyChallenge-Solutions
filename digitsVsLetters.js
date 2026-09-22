//Date: September 22, 2026

/*
Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.
*/

function digitsOrLetters(str) {
    let numRegex = /[0-9]/;
    let letterRegex = /[a-zA-Z]/;

    let numCount = 0;
    let letterCount = 0;

    for(let i = 0; i < str.length;i++){
        if(str[i].match(numRegex)){
            numCount++;
        } else if(str[i].match(letterRegex)){
            letterCount++;
        } else {
            continue;
        }
    }
    if(numCount > letterCount){
        return 'digits';
    } else if(letterCount > numCount){
        return 'letters';
    } else {
        return 'tie';
    }
}

console.log(digitsOrLetters("abc123"));
console.log(digitsOrLetters("a1b2c3d"));
console.log(digitsOrLetters("1a2b3c4"));