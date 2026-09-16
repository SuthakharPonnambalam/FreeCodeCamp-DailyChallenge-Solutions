//Date: September 1, 2026

/*
Given a departure city, an arrival city, a flight duration in hours, and a direction of travel, return the number of jet lag hours the traveller is experiencing.

The given cities will be from the following list that includes their UTC offset:

City	Offset
"Los Angeles"	-8
"New York"	-5
"London"	0
"Istanbul"	+3
"Dubai"	+4
"Hong Kong"	+8
"Tokyo"	+9
To calculate jet lag hours:

Find the timezone difference in hours between the two cities.
Determine the direction multiplier. If travelling "east", it's 1.5, otherwise, it's 1.0.
Get the jet lag hours with the formula: timezone difference + (flight duration * 0.1) * direction multiplier
Return the jet lag hours rounded to one decimal place.
*/


let cities = {
    "Los Angeles": -8,
    "New York": -5,
    "London": 0,
    "Istanbul": +3,
    "Dubai": +4,
    "Hong Kong": +8,
    "Tokyo": +9
}

function getJetLagHours(departureCity, arrivalCity, flightDuration, direction) {
    let jetLaggedHours = 0;
    let timeOne = cities[departureCity];
    let timeTwo = cities[arrivalCity];

    let timeZoneDiff = Math.abs(timeOne - timeTwo);
    let dirMultiplier = 0;
    switch(direction){
        case 'east': dirMultiplier = 1.5;break;
        case 'west': dirMultiplier = 1.0; break;
    }
    let jetLagHours = timeZoneDiff + ((flightDuration * 0.1) * dirMultiplier);
    return (jetLagHours);
}

console.log(getJetLagHours("Istanbul", "Hong Kong", 10, "east"));
console.log(getJetLagHours("London", "New York", 8, "west"));
console.log(getJetLagHours("Hong Kong", "Tokyo", 4, "east"));
