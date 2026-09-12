//Date: September 11, 2026

/*
Given a bingo number, return the next bingo number sequentially.

A bingo number is a single letter followed by a number in its range according to this chart:

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".
*/

function getNextBingoNumber(n) {
    let num = Number(n.slice(1));
    let newNum = num + 1;
    let result = '';
    if(newNum >= 1 && newNum <= 15) {
        result += 'B';
    } else if(newNum >= 16 && newNum <= 30){
        result += 'I';
    } else if(newNum >= 31 && newNum <= 45){
        result += 'N';
    } else if(newNum >= 46 && newNum <= 60){
        result += 'G';
    } else if(newNum >= 61 && newNum <= 75){
        result += 'O';
    } else {
        return 'B1';
    }

    return `${result}${newNum}`;
}

console.log(getNextBingoNumber("075"));