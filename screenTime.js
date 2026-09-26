//Date: September 12, 2026

/*
Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

If any single day has 10 hours or more, it's too much.
If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
If the average of the seven days is greater than or equal to 6 hours, it's too much.
*/

function tooMuchScreenTime(hours) {
    let total = 0
    for(let i = 0; i < hours.length;i++){
        total += hours[i];
        if(hours[i] >= 10){
            return true;
        }
    }
    let avg = Math.floor(total/7);
    if(avg >= 6){
        return true;
    }

    for(let j = 0;j < hours.length;j++){
        let avgOfThreeDays;
        if(hours[j+2] === undefined){
            break;
        } else {
            avgOfThreeDays = (hours[j] + hours[j+1] + hours[j+2])/3;
            if(avgOfThreeDays >= 8){
                return true;
            }
        }
    }
    return false;
}

console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]));
console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]));
console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]));
console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]));
