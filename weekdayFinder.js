//Date: September 26, 2026

/*
Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.

*/

function getWeekday(dateString) {
    let date = new Date(dateString);
    let day = (date.getUTCDay());
    switch(day){
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
    }
}

console.log(getWeekday("2025-11-06"));
console.log(getWeekday("1999-12-31"));
console.log( getWeekday("1111-11-11"));
console.log(getWeekday("2345-10-01"));