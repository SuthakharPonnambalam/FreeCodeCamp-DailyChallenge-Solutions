//Date: September 27, 2026

/*
Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.
*/

function oneHundred(chars) {
    let result = '';
    let i = 0;
    while(result.length < 100){
        result += chars[i];
        i++;
        if(i === chars.length){
            i = 0;
        }
    }
    return result;
}

console.log(oneHundred("One hundred "));