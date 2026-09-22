//Date: September 22, 2026

/*
Given the position of one of your pawns on a chessboard, return an array of all the valid squares it can move to in ascending order.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top).
For this challenge:

You are the player on the bottom of the board.
Pawns can only move one square "up".
Unless the pawn is in the starting row (row 2), then it can move one or two squares up.
For example, given "D4", return ["D5"], the only square your pawn can move to. Given "B2", return ["B3", "B4"], because it's on the starting row and needs to be in ascending order.
*/

function findPawnMoves(position) {
    let letter = position[0];
    let number = position[1];
    //console.log(number);
    let result = [];
    if(number === '2'){
        let temp = `${letter}`;
        let newNum = Number(number)+1;
        temp += newNum;
        result.push(temp);
        let temp2 = `${letter}`
        newNum = Number(number)+2;
        temp2 += newNum;
        result.push(temp2);
    } else {
        let temp = `${letter}`;
        let num = Number(number)+1;
        temp+=num;
        result.push(temp);
    }

    return result;
}

console.log(findPawnMoves("B2"));
console.log(findPawnMoves("D4"));