//Date: September 17, 2026

/*
Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

In chess, you start with 16 pieces:

Piece	Abbreviation	Quantity	Value
Pawn	"P"	8	1
Rook	"R"	2	5
Knight	"N"	2	3
Bishop	"B"	2	3
Queen	"Q"	1	9
King	"K"	1	0
The given array will only contain the abbreviations above.
Any of the 16 pieces not included in the given array have been captured.
Return the total value of all captured pieces, unless...
If the King has been captured, return "Checkmate".
*/

function getCapturedValue(pieces) {
    if(!pieces.includes('K')){
        return 'Checkmate';
    }
    let valueOfPieces = 0;
    let total = 39;
    for(let i = 0; i < pieces.length;i++){
        let val = getVal(pieces[i]);
        valueOfPieces += val;
    }
    //console.log(valueOfPieces);
    return total - valueOfPieces;
}

const getVal = (piece) => {
    switch(piece){
        case 'P': return 1;
        case 'R': return 5;
        case 'N': return 3;
        case 'B': return 3;
        case 'Q': return 9;
        case 'K': return 0;
    }
}

console.log(getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]));
console.log(getCapturedValue(["P", "K"]));
console.log(getCapturedValue(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"]));
console.log(getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]));