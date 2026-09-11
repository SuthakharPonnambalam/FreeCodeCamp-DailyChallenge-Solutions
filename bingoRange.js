//Date: September 05, 2026

/*
Given a bingo letter, return the number range associated with that letter.

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
Return an array with all numbers in the range from smallest to largest.
*/

function getBingoRange(letter) {
    let start = getStartNumber(letter);
    let arr = [];
    for(let i = start;i<(start+15);i++){
        arr.push(i);
    }
    return arr;
}

const getStartNumber = (letter) => {
    switch(letter){
        case 'B': return 1;
        case 'I': return 16;
        case 'N': return 31;
        case 'G': return 46;
        case 'O': return 61;
    }
}

console.log(getBingoRange("B"));
console.log(getBingoRange("I"));
console.log(getBingoRange("G"));