//Date: September 11, 2026

/*
Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top).
Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.

*/

function rookAttack(rook1, rook2) {
    let char1 = rook1[0];
    let char2 = rook2[0];
    let num1 = rook1[1];
    let num2 = rook2[1];
    
    if(char1 === char2 || num1 === num2){
        return true;
    } 
    return false;
}

console.log(rookAttack("A1", "A8"));
console.log(rookAttack("E3", "D4"));
console.log(rookAttack("H7", "F6"));
console.log(rookAttack("B4", "F4"));