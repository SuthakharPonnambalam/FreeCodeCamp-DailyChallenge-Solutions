//Date: September 04, 2026
/*
In a distant galaxy, parsecs are used to measure both time and distance. Given an integer number of parsecs, return its equivalent in time or distance.

If the given integer is odd, it represents time. If it's even, it represents distance.
Use these conversion rates:

Parsecs	Time/Distance
1	2 hours
2	6 light years
Return the converted value as an integer.
*/


function convertParsecs(parsecs) {
    if(parsecs % 2 !== 0){
        if(parsecs === 1){
            return 2;
        }
        return parsecs * 2;
    } else {
        if(parsecs === 2){
            return 6;
        }
        return parsecs * 3
    }
}

console.log(convertParsecs(1));
