//Date: September 04, 2026

/*
Today is the summer solstice, the longest day of the year in the Northern Hemisphere and the shortest in the Southern. Given a latitude, return a string representing daytime and nighttime hours.

The latitude will be between 90 (north pole) and -90 (south pole), inclusive
The number of daytime hours = 12 + (latitude / 90) * 12
Round the daytime hours to the nearest even number
Return a 24-character string using "☀️" for daytime hours and "🌑" for nighttime hours, where:

Each character represents one hour, starting at midnight (hour 0)
Sunrise and sunset fall symmetrically around noon
For example, a latitude of 0 (the equator) has 12 hours of daylight, so sunrise is at 6:00 AM and sunset is at 6:00 PM. Return: "🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑".
*/


function getDaytimeHours(latitude) {
    let arraySize = 24;
    let arr = new Array(arraySize);

    let dayTimeHours = 12 + (Number((latitude/90).toFixed(2)) * 12);
    dayTimeHours = getHours(dayTimeHours);
    let nightTimeHours = 24 - dayTimeHours;
    nightTimeHours = getHours(nightTimeHours);
    //console.log(`${dayTimeHours} && ${nightTimeHours}`);
    let middle = 11;
    let start = middle - (dayTimeHours/2)+1;
    //console.log(start);
    let end = middle + (dayTimeHours/2);
    for(let i = 0; i < arr.length;i++){
        if(i >= start && i <= end){
            arr[i] = '☀️';
        }
        else {
            arr[i] = '🌑';
        }
    }
    return arr.join('');
}

const getHours = (hours) => {
    if(Math.floor(hours) % 2 === 0){
        return Math.floor(hours);
    } else if (Math.ceil(hours) % 2 === 0){
        return Math.ceil(hours);
    } else{}
}

console.log(getDaytimeHours(-33));
console.log(getDaytimeHours(66.5));