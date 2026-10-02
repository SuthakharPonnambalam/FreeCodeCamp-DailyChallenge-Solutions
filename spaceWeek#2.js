//Date: October 2, 2026

/*
For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
Characters 0-9 correspond to luminosity levels 0-9.
Characters A-Z correspond to luminosity levels 10-35.
A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less
*/

let map = new Map();
for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(65 + i); // A-Z
    map.set(letter, 10 + i);                  // 10-35
}

function hasExoplanet(readings) {
    let sum = 0;
    let regex = /[A-Z]/
    for(let i = 0; i < readings.length;i++){
        let temp = readings[i];
        if(temp.match(regex)){
            let val = map.get(temp);
            sum = sum+val;
        }else{
            let val = Number(temp);
            sum = sum + val;
        }
    }
    let avg = Math.floor(sum/readings.length);
    let average80Percent = Math.floor(avg * 0.80);
    //console.log(sum, avg, average80Percent);


    for(let i = 0; i<readings.length;i++){
        let temp = readings[i];
        let val;
        if(temp.match(regex)){
            val = map.get(temp);
        }else{
            val = Number(temp);
        }
        if(val <= average80Percent){
            return true;
        }
        else{
            continue;
        }
    }
    return false;
}

console.log(hasExoplanet("665544554"));
console.log(hasExoplanet("FGFFCFFGG"));
console.log(hasExoplanet("FREECODECAMP"));
console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"));
console.log(hasExoplanet("9AB98AB9BC98A"));
console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP"));