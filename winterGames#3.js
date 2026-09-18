//Date: September 18, 2026

/*
Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

Each round consists of 5 targets.
Each missed target results in a 150 meter penalty loop.
*/

function calculatePenaltyDistance(rounds) {
    let difference = 0;
    for(let i = 0; i < rounds.length;i++){
        difference = difference + (5 - rounds[i]);
    }
    return difference * 150;
}

console.log(calculatePenaltyDistance([4, 5, 3, 5]))