//Date: September 18, 2026

/*
Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

The length of the array determines the team size: 1, 2 or 4 person teams.
All given weight values are in kilograms (kg).
The bobsled (sled by itself) must have a minimum weight of:

162 kg for a 1-person team
170 kg for a 2-person team
210 kg for a 4-person team
The total weight of the bobsled (athletes plus sled) must not exceed:

247 kg for a 1-person team
390 kg for a 2-person team
630 kg for a 4-person team
Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.
*/

function checkEligibility(athleteWeights, sledWeight) {
    let size = athleteWeights.length;
    let bobsledWeight = 0;
    let totalWeight = 0, weights = 0;
    let status = 'Not Eligible';

    switch(size){
        case 1: 
            if(sledWeight >= 162){
                totalWeight = sledWeight + athleteWeights[0];
                status = checkStatus(size, totalWeight);
            }
            break;
        case 2:
            if(sledWeight >= 170){
                for(let i = 0; i < size; i++){
                     weights += athleteWeights[i];
                }
                totalWeight = sledWeight + weights;
                status = checkStatus(size, totalWeight);
            }
            break;
        case 4:
            if(sledWeight >= 210){
                for(let i = 0; i < size; i++){
                weights += athleteWeights[i];
            }
            totalWeight = sledWeight + weights;
            status = checkStatus(size, totalWeight);
            }
            break;
    }
    return status;
}

const checkStatus = (s, w) => {
    switch (s){
        case 1:
            if(w <= 247){
                return 'Eligible'
            }
            else { return 'Not Eligible';}
        case 2: 
            if(w <= 390){
                return 'Eligible'
            }
            else { return 'Not Eligible';}
        case 4:
            if(w <= 630){
                return 'Eligible'
            }
            else { return 'Not Eligible';}
    }
}

console.log(checkEligibility([78], 165));
console.log(checkEligibility([85, 95], 168));
console.log(checkEligibility([106, 99, 90, 88], 205));
console.log(checkEligibility([106, 99, 103, 96], 227));