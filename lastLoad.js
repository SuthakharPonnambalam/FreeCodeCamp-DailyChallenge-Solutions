//Date: September 1, 2026

/*
Given the number of scoops of laundry detergent you have remaining and an array of how many scoops you used in each of the previous days, return the number of full days of detergent you have remaining.

Calculate your average daily usage from the usage history and assume that amount of usage each day going forward.
*/

function lastLoadDate(scoops, usage) {
    let length = usage.length;
    let sum = 0;
    for(let i = 0; i < usage.length; i++){
        sum = sum + usage[i];
    }
    //console.log(sum);
    let averageUsage = Number((sum/length).toFixed(3));

    let loadRemaining = Math.floor(scoops/averageUsage);
    return loadRemaining;
}

console.log(lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2]));
console.log(lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1]));
console.log(lastLoadDate(33, [5, 0, 4, 3, 3, 2]));
console.log(lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2]));