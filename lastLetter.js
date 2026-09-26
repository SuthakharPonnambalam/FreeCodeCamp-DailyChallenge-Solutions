//Date: September 15, 2026

/*
Given a string, return the letter from the string that appears last in the alphabet.

If two or more letters tie for the last in the alphabet, return the first one.
Ignore all non-letter characters.
*/

function getLastLetter(str) {
    let copy = str;
    str = str.toLowerCase();
    let last = 0;
    let pos = 0;
    for(let i = 0; i < str.length; i++){
        let temp = str.charCodeAt(i);
        if(temp > last){
            last = temp;
            pos = i;
        }
    }
    //console.log(pos);
    return copy[pos];
}

console.log(getLastLetter("world"));
console.log(getLastLetter("Hello World"));
console.log(getLastLetter("The quick brown fox jumped over the lazy dog."));
console.log(getLastLetter("HeLl0"));
console.log(getLastLetter("!#$ er@R asd fT.,> 2t0e9"));