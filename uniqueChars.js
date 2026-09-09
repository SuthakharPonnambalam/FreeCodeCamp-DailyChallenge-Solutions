//Date: September 9, 2026

/*
Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.
*/

function allUnique(str) {
    let map = new Map();
    for(let i = 0; i < str.length;i++){
        if(map.has(str[i])){
            map.set(str[i], map.get(str[i])+1);
        }
        else {
            map.set(str[i], 1);
        }
    }
    for (const [key, value] of map){
        if(value >= 2){
            return false;
        }
    }
    return true;
}

console.log(allUnique("abc"));
console.log(allUnique("aA"));
console.log(allUnique("~!@#$%^&*()_+"));
console.log(allUnique("hello"));
console.log(allUnique("!@#*$%^&*()aA"));