//Date: September 05, 2026

/*
Given a string, return an object (JavaScript) or dictionary (Python) mapping each character to the number of times it appears.
*/

function getFrequency(str) {
    let result = {};
    let map = new Map();
    for(let i =0; i < str.length; i++){
        let count = 0;
        for(let j = 0;j<str.length;j++){
            if(str[i] === str[j]){
                count = count + 1;
            }
            map.set(str[i], count);
        }
    }
    // Convert Map to Plain Object
    result = Object.fromEntries(map);
    return result
}

console.log(getFrequency("hello"));