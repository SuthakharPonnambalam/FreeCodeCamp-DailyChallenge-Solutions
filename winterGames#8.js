//Date: September 18, 2026

/*
Given an array of five numbers, each representing the time (in seconds) it took a luger to complete a segment of a track, determine which segment had the fastest speed and what that speed was.

The track is divided into the following segments:

Segment 1: 320 meters
Segment 2: 280 meters
Segment 3: 350 meters
Segment 4: 300 meters
Segment 5: 250 meters
The first value in the given array corresponds to the time for segment 1, the second value to segment 2, and so on.

To calculate the speed (in meters per second) for a segment, divide the distance by the time.

Return "The luger's fastest speed was X m/s on segment Y.". Where X is the fastest speed, rounded to two decimal places, and Y is the segment number where the fastest speed occurred.
*/

let distances = [320, 280, 350, 300, 250];

function getFastestSpeed(times) {
    let max = 0, pos = 0;
    for(let i = 0; i< times.length;i++){
        let speed = (distances[i]/times[i]).toFixed(2);
        //console.log(speed);
        if(speed > max){
            max = speed;
            pos = i;
        }
    }
    return `The luger's fastest speed was ${max} m/s on segment ${pos+1}.`
}

console.log(getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]));
console.log(getFastestSpeed([8.490, 7.732, 10.103, 8.489, 6.840]));