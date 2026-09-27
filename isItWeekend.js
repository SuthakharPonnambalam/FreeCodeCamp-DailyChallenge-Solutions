//Date: September 27, 2026

/*
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.
*/

function daysUntilWeekend(dateString) {
    let date = new Date(dateString);
    const day = date.getUTCDay();
    //console.log(day);
    if(day >=1 && day <= 5){
        let diff = 6 - day;
        if(diff === 1){
            return `${diff} day until the weekend.`
        }
        return `${diff} days until the weekend.`
    } else{
        return `It's the weekend!`;
    }
}

console.log(daysUntilWeekend("2025-11-14"));
console.log(daysUntilWeekend("2025-01-01"));
console.log(daysUntilWeekend("2025-12-06"));
console.log(daysUntilWeekend("2026-11-29"));