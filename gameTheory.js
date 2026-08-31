//Date: August 31, 2026
/*
Given two equal length strings representing two players' strategies for a game, return the scores as an array [player1, player2].
The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
Each character represents one round, scored as follows:
If both players cooperate, each scores 3.
If both players defect, each scores 1.
If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.
*/


function playGame(p1, p2) {
    let p1Score = 0, p2Score = 0;
    for(let i =0; i < p1.length; i++){
        if(p1[i] === 'C' && p2[i] === 'C'){
            p1Score = p1Score + 3;
            p2Score = p2Score + 3;
        } else if(p1[i] === 'D' && p2[i] === 'D'){
            p1Score = p1Score + 1;
            p2Score = p2Score + 1
        } else if(p1[i] === 'C' && p2[i] === 'D'){
            p1Score = p1Score + 0;
            p2Score = p2Score + 5;
        }
        else if(p1[i] === 'D' && p2[i] === 'C'){
            p1Score = p1Score + 5;
            p2Score = p2Score + 0;
        }
    }
    let result = [];
    result.push(p1Score);
    result.push(p2Score);
    return result;
}

console.log(playGame("CCCC", "CCCC"));
console.log(playGame("DDDD", "DDDD"));
console.log(playGame("CCDD", "CDDD"));
console.log(playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD"));
console.log(playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC"));