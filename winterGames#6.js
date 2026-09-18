//Date: September 18, 2026

/*
Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.
*/

function computeScore(judgeScores, ...penalties) {
    judgeScores = judgeScores.sort((a,b) => a - b);
    let totalScore = 0;
    for(let i =0 ; i< judgeScores.length;i++){
        if(i ===0 || i === judgeScores.length-1){

        } else {
            totalScore += judgeScores[i];
        }
    }
    //console.log(totalScore);
    let totalPenalties = 0;
    for(let j = 0; j < penalties.length;j++){
        totalPenalties += penalties[j];
    }
    
    return totalScore - totalPenalties;
}

console.log(computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1));