//Date: September 1, 2026

/*
Given two strings of equal length, return the sum of the shortest distances between each pair of characters.

The input will only contain lowercase letters
The alphabet is treated as a circle, so the distance between a and z is 1.
*/


let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function letterDistance(str1, str2) {
    let sum = 0;
    for(let i=0; i<str1.length;i++){
        let distance = compareDistances(str1[i], str2[i]);
        sum += distance;
    }
    return sum;
}

const compareDistances = (letter1, letter2) => {
    const let1Index = arr.indexOf(letter1);
    const let2Index = arr.indexOf(letter2);

    let distance1 = Math.abs(let1Index - let2Index);
    let distance2 = arr.length - distance1;

    let min;
    if(distance1 < distance2){
        min = distance1;
    } else{
        min = distance2;
    }
    return min;
}

console.log(letterDistance("abc", "bcd"));
console.log(letterDistance("abc", "xyz"));
console.log(letterDistance("encrypt", "decrypt"));
console.log(letterDistance("algorithm", "codeblock"));
console.log(letterDistance("alligator", "crocodile"));