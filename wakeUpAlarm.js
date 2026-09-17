//Date: September 17, 2026

/*
Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.

Both times will be given in "HH:MM" 24-hour format.
Return:

"early" if you woke up before your alarm time.
"on time" if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
"late" if you woke up more than 10 minutes after your alarm time.
Both times are on the same day.

*/

function alarmCheck(alarmTime, wakeTime) {
    let time1 = getTimeInMinutes(alarmTime);
    let time2 = getTimeInMinutes(wakeTime);
    //console.log(time1, time2);
    if(time1 > time2){
        if(time1 - time2 <=10){
            return 'on time';
        } else {
            return 'early'
        }
    } else if(time1 === time2){
        return 'on time';
    } else if (time1 < time2){
        if(time2 - time1 <=10){
            return 'on time';
        } else{
            return 'late';
        }
    }
}

const getTimeInMinutes = (time) => {
    let arr = time.split(':');
    let hours = Number(arr[0])*60;
    let mins = Number(arr[1]);
    let totalMins = hours + mins;
    return totalMins;
}

console.log(alarmCheck("07:00", "06:45"));
console.log(alarmCheck("06:30", "06:30"));
console.log(alarmCheck("08:10", "08:15"));
console.log(alarmCheck("09:30", "09:45"));
console.log(alarmCheck("08:15", "08:25"));
console.log(alarmCheck("05:45", "05:56"));
console.log(alarmCheck("04:30", "04:00"));