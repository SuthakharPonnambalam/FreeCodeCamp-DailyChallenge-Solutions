//Date: September 22, 2026

/*
Given a timestamp (number of milliseconds since the Unix epoch), return:

"odd" if the day of the month for that timestamp is odd.
"even" if the day of the month for that timestamp is even.
For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

Note: The timestamp is in milliseconds and you should use the date in the UTC timezone, not in your local time.
*/

function oddOrEvenDay(timestamp) {
    let date = new Date(timestamp);
    let actualDate = date.getUTCDate();

    if(actualDate %2 === 0){
        return 'even';
    }
    return 'odd';
}

console.log(oddOrEvenDay(1769472000000));
console.log(oddOrEvenDay(86400000));