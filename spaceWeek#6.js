//Date: October 10, 2026

/*
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
Note: Day 1 represents the day of the new moon, meaning 0 days have passed since the last new moon.

*/

function moonPhase(dateString) {
    let startDate = '2000-01-06';

    let date1 = new Date(startDate);
    let date2 = new Date(dateString);

    const diffInTime = Math.abs(date2 - date1);
    const oneDay = 1000 * 60 * 60 * 24;

    let noOfElapsedDays = Math.round(diffInTime / oneDay);

    noOfElapsedDays = (noOfElapsedDays % 28) + 1;

    if(noOfElapsedDays <= 7){
        return 'New';
    } else if(noOfElapsedDays <= 14){
        return 'Waxing';
    } else if(noOfElapsedDays <= 21){
        return 'Full';
    } else {
        return 'Waning';
    }
}

console.log(moonPhase("2000-01-12"));
console.log(moonPhase("2000-01-13"));
console.log(moonPhase("2014-10-15"));
console.log( moonPhase("2012-10-21"));
console.log(moonPhase("2022-12-14"));