//Date: September 22, 2026

/*
Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.
*/

function separateLettersAndNumbers(str) {
    let result = ' ';
    let letterRegex = /[a-zA-Z]/;
    let numRegex = /[0-9]/;
    let lastChar = str[str.length-1];

    for(let i = 0; i <str.length-1;i++){
        if(str[i].match(letterRegex) && str[i+1].match(numRegex)){
            result = result + str[i] + '-';
            //console.log(i, i+1);
        } else if(str[i].match(numRegex) && str[i+1].match(letterRegex)){
            result = result + str[i] + '-';
            //console.log(i, i+1);
        } else {
            result += str[i];
            //console.log(i);
        }
    }

    if(result[result.length-1].match(numRegex) && lastChar.match(letterRegex)){
        result = result + '-' + lastChar;
    } else if(result[result.length-1].match(letterRegex) && lastChar.match(numRegex)){
        result = result + '-' + lastChar
    }
    else {
        result += lastChar;
    }
    return result.trim();
}

console.log(separateLettersAndNumbers("ABC123"));
console.log(separateLettersAndNumbers("Route66"));
console.log(separateLettersAndNumbers("H3LL0W0RLD"));
console.log(separateLettersAndNumbers("a1b2c3d4"));