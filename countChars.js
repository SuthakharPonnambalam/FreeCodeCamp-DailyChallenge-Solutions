//Date: September 27, 2026

/*
Given a sentence string, return an array with a count of each character in alphabetical order.

Treat upper and lowercase letters as the same letter when counting.
Ignore numbers, spaces, punctuation, etc.
Return the count and letter in the format "letter count". For instance, "a 3".
All returned letters should be lowercase.
Do not return a count of letters that are not in the given string.
*/

function countCharacters(sentence) {
    sentence = sentence.toLowerCase();
    let regex = /[a-z]/;

    let map = new Map();
    
    for(let i = 0; i < sentence.length;i++){
        if(sentence[i].match(regex)){
            if(map.has(sentence[i])){
                map.set(sentence[i], map.get(sentence[i])+1);
            } else {
                map.set(sentence[i], 1);
            }
        }
        else {
            continue;
        }
    }

    let sortedMap = new Map([...map.entries()].sort());
    //console.log(sortedMap);

    let result = '';
    for(const [key, value] of sortedMap){
        result = result + `${key} ${value}` + ',';
    }

    
    result = result.slice(0, result.length-1);
    let arr = result.split(',');
    return arr;
    
}

console.log(countCharacters("hello world"));