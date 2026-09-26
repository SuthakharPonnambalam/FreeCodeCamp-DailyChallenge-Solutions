//Date: September 25, 2026

/*
December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.

Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:

Latitude	Daylight Hours
-90	24
-75	23
-60	21
-45	15
-30	13
-15	12
0	12
15	11
30	10
45	9
60	6
75	2
90	0
*/

function daylightHours(latitude) {
    if(latitude > 0){
        if(latitude <=15){
            return 11;
        } else if(latitude <=30){
            return 10;
        } else if(latitude <= 45){
            return 9;
        } else if(latitude <=60){
            return 6;
        } else if(latitude <= 75){
            return 2;
        } else if (latitude <=90){
            return 0;
        }
    } else if (latitude === 0){
        return 12;
    } else {
        if(latitude <= -90){
            return 24;
        } else if(latitude <= -75){
            return 23;
        } else if(latitude <= -60){
            return 21;
        } else if(latitude <= -45){
            return 15;
        } else if(latitude <= -30){
            return 13;
        } else if(latitude <=-15){
            return 12;
        }
    }
}

console.log(daylightHours(45));
console.log(daylightHours(-90));
console.log(daylightHours(23));
console.log(daylightHours(-33));
console.log(daylightHours(-10));