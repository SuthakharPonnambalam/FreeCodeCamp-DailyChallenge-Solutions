//Date: September 05, 2026

/*
Given an array of hours slept each night leading up to today, and a target number of hours per night, return how many hours of sleep you need tonight to eliminate your sleep debt.

Include tonight's hours in the total time needed to catch up.
If you've slept enough to cover tonight's target or more, return 0.
*/

function sleepDebt(hoursSlept, targetHours) {
    let totalSleepNeeded = targetHours * 7;
    let actualSleepTotal = 0;
    for(let i = 0; i < hoursSlept.length; i++){
        actualSleepTotal += hoursSlept[i];
    }
    //console.log(actualSleepTotal, totalSleepNeeded)
    let diff = totalSleepNeeded - actualSleepTotal;
    if(diff > 0){
        return diff;
    }
    return 0;
}

console.log(sleepDebt([6, 6, 6, 6, 6, 6], 8));
console.log(sleepDebt([6, 7, 8, 4, 8, 6], 7));
console.log(sleepDebt([10, 10, 9, 10, 9, 11], 9));
console.log(sleepDebt([8, 7, 6, 7, 6, 8], 6));
console.log(sleepDebt([8, 9, 10, 9, 10, 7], 7));