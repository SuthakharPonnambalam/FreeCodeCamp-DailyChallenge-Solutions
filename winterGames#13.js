//Date: September 18, 2026

/*
Given an array of jump scores for athletes, calculate their start delay times for the cross-country portion of the Nordic Combined.

The athlete with the highest jump score starts first (0 second delay). All other athletes start later based on how far behind their jump score is compared to the best jump.

To calculate the delay for each athlete, subtract the athlete's jump score from the best overall jump score and multiply the result by 1.5. Round the delay up to the nearest integer.
*/

function calculateStartDelays(jumpScores) {
    let copyJumpScores = [...jumpScores];
    copyJumpScores.sort((a, b) => b - a);
    let max = copyJumpScores[0];
    let delay = 0;

    //console.log(jumpScores, copyJumpScores);
    let delayArr = [];
    for(let i = 0; i<jumpScores.length; i++){
        if(jumpScores[i] !== max){
            delay = max - jumpScores[i];
            let timeNeeded = Math.round(delay * 1.5);
            delayArr.push(timeNeeded);
        } else{
            delayArr.push(0);
        }
    }
    return delayArr;
}

console.log(calculateStartDelays([120, 110, 125]));