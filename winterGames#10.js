//Date: September 18, 2026

/*
Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.

To determine the rating:

Calculate the steepness of the hill by taking the drop divided by the distance.
Then, calculate the adjusted steepness based on the hill type:
"Downhill": multiply steepness by 1.2
"Slalom": multiply steepness by 0.9
"Giant Slalom": multiply steepness by 1.0
Return:

"Green" if the adjusted steepness is less than or equal to 0.1
"Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
"Black" if the adjusted steepness is greater than 0.25
*/

function getHillRating(drop, distance, type) {
    let steepness = (drop/distance).toFixed(3);
    console.log(steepness);

    switch(type){
        case 'Downhill': 
            steepness = steepness * 1.2;
            break;
        case 'Slalom':
            steepness = steepness * 0.9;
            break;
        case 'Giant Slalom': 
            steepness = steepness * 1.0;
            break;
    }
    console.log(steepness);
    if(steepness <= 0.1){
        return 'Green';
    } else if(steepness > 0.1 && steepness <= 0.25){
        return 'Blue';
    } else {
        return 'Black';
    }
}

console.log(getHillRating(95, 900, "Slalom"));
console.log(getHillRating(380, 1500, "Giant Slalom"));