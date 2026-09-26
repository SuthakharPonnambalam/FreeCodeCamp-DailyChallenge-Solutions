//Date: September 26, 2026

/*
Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.

If there were no vehicles speeding, return [0, 0].
*/

function speeding(speeds, limit) {
    let result = [];
    let count = 0;
    let speedDiff = [];
    for(let i =0; i < speeds.length;i++){
        if(speeds[i] > limit){
            count += 1;
            speedDiff.push(speeds[i] - limit);
        } else{
            continue
        }
    }
    
    result.push(count);

    if(count !== 0){
        let sum = 0;
        for(let i = 0; i < speedDiff.length;i++){
            sum = sum + speedDiff[i];
        }
        let diffSpeed = Number(((sum/speedDiff.length).toFixed(1)));
        result.push(diffSpeed);
    } else {
        result.push(0);
    }
    
    return result;
}

console.log(speeding([50, 60, 55], 60));
console.log(speeding([58, 50, 60, 55], 55));
console.log(speeding([61, 81, 74, 88, 65, 71, 68], 70));
console.log(speeding([100, 105, 95, 102], 100));
console.log(speeding([40, 45, 44, 50, 112, 39], 55));