//Date: September 23, 2026

/*
Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.
*/

function isMirror(str1, str2) {
    let reversedString = str1.split('').reverse().join('');
    let mapOne;
    let mapTwo;

    let getCleanStringOne = getCleanString(reversedString);
    let getCleanStringTwo = getCleanString(str2);

    if(getCleanStringOne === getCleanStringTwo){
        mapOne = getLetterMap(getCleanStringOne);
        mapTwo = getLetterMap(getCleanStringTwo);
        // console.log(mapOne);
        // console.log(mapTwo);

        if(mapOne.size !== mapTwo.size){
            return false;
        } else {
            for (const[key,value] of mapOne){
                if(mapTwo.has(key)){
                    if(mapTwo.get(key) === value){
                        // console.log(mapTwo.get(key), value);
                        continue;
                    } else{
                        return false
                    }
                }
                else{
                    return false;
                }
            }
        }
        return true;
    } else {
        return false;
    }
}

const getLetterMap = (str) => {
    let regex = /[a-zA-Z]/;
    let map = new Map();
    for(let i = 0; i < str.length;i++){
        if(str[i].match(regex)){
            if (map.has(str[i])){
            map.set(str[i], map.get(str[i])+1);
            } else{
                map.set(str[i], 1);
            }
        } else {
            continue;
        }  
    }
    return map;
}

const getCleanString = (str) => {
    let result = ' ';
    let regex = /[a-zA-Z]/;
    for(let i = 0; i < str.length;i++){
        if(str[i].match(regex)){
            result += str[i];
        } else {
            continue;
        }
    }
    return result.trim();
}

console.log(isMirror("helloworld", "helloworld"));
console.log(isMirror("Hello World", "dlroW olleH"));
console.log(isMirror("Mirror", "mirror"));
console.log(isMirror("Hello World", "dlroW-olleH"));
console.log(isMirror("Hello World", "!dlroW !olleH"));