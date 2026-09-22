//Date: September 22, 2026

/*
Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
*/

function getBingoLetter(n) {
    if(n >= 1 && n <=15){
        return 'B'; 
    } else if( n >=16 && n <= 30){
        return 'I';
    } else if( n >=31 && n <= 45){
        return 'N';
    } else if( n >=46 && n <= 60){
        return 'G';
    } else if(n >= 61 && n <=75){
        return 'O';
    } else {}
}

console.log(getBingoLetter(75))