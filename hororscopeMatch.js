//Date: September 1, 2026

/*
Given two star sign strings, return their compatibility percentage.

The signs are arranged in a wheel of 12 positions in this order: "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", wrapping back to "Aries" after "Pisces". Find the shortest distance between the two signs and return the compatibility:

Distance	Compatibility
0	"100%"
1	"40%"
2	"80%"
3	"30%"
4	"90%"
5	"20%"
6	"50%"
*/

let arr = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

function horoscopeMatch(sign1, sign2) {
    let indexOfSign1 = arr.indexOf(sign1);
    let indexOfSign2 = arr.indexOf(sign2);
    let route1 = Math.abs(indexOfSign1 - indexOfSign2);
    let route2 = 12 - route1;
    let smallestRoute;
    if(route1 < route2){
        smallestRoute = route1;
    } else {
        smallestRoute = route2;
    }

    switch(smallestRoute){
        case 0:return '100%';
        case 1:return '40%';
        case 2:return '80%';
        case 3:return '30%';
        case 4:return '90%';
        case 5:return '20%';
        case 6:return '50%';
    }
}

console.log(horoscopeMatch("Libra", "Sagittarius"));
console.log(horoscopeMatch("Gemini", "Scorpio"));
console.log( horoscopeMatch("Virgo", "Taurus"));