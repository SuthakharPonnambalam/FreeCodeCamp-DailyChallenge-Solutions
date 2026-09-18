//Date: September 18, 2026

/*
Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

The first element of each array corresponds to lap 1, the second to lap 2, and so on.
*/

function largestDifference(skater1, skater2) {
    let difference = 0;
    let pos = 0;
    for(let i = 0; i < skater1.length;i++){
        let min, max;
        if(skater1[i] > skater2[i]){
            max = skater1[i]; min = skater2[i];
        } else {
            min = skater1[i]; max = skater2[i];
        }
        let diff = (max - min).toFixed(2);
        //console.log(diff);
        if(diff > difference){
            difference = diff;
            pos = i;
        } else {

        }
    }
    return pos+1;
}

console.log(largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30]));