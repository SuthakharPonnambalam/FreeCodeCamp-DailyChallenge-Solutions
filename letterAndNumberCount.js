//Date: September 18, 2026

/*
Given a string, return a message with the count of how many letters and numbers it contains.

Letters are A-Z and a-z.
Numbers are 0-9.
Ignore all other characters.
Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers".
*/

function countLettersAndNumbers(str) {
    str = str.toLowerCase();
    let letterCount = 0;
    let numCount = 0;
    for(let i = 0; i < str.length;i++){
        if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
            letterCount += 1;
        } else if((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)){
            numCount += 1;
        } else {
            continue;
        }
    }
    //console.log(letterCount, numCount);

    let lCountText;
    if(letterCount ===1){
        lCountText = `${letterCount} letters`;
    } else {
        lCountText = `${letterCount} letter`;
    }

    let nCountText;
    if(numCount === 1){
        nCountText = `${numCount} numbers`;
    } else {
        nCountText = `${numCount} number`;
    }

    return `The string has ${lCountText} and ${nCountText}.`;
}

console.log(countLettersAndNumbers("helloworld123"));