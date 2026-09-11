//Date: September 04, 2026

/*
Given a time string in "HH:MM" format (24-hour clock), return:

"Good morning" for times 05:00 to 11:59
"Good afternoon" for times 12:00 to 17:59
"Good evening" for times 18:00 to 21:59
"Good night" for times 22:00 to 04:59
*/

function getGreeting(time) {
    let timeArr = time.split(':');
    let hours = Number(timeArr[0]);
    if(hours >=5 && hours <= 11){
        return 'Good morning';
    } else if(hours >=12 && hours <= 17){
        return 'Good afternoon';
    } else if(hours >=18 && hours <= 21){
        return 'Good evening';
    } else {
        return 'Good night';
    }
}

console.log(getGreeting("06:30"));