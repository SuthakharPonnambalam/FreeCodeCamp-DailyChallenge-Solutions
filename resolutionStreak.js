//Date: September 21, 2026

/*
Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: the number of steps walked that day, the minutes of screen time that day, and the number of pages read that day; determine if you are keeping your resolutions.

The first sub-array is day 1, and second day 2, and so on.
A day is considered successful if all three of the following goals are met:

You walked at least 10,000 steps.
You had no more than 120 minutes of screen time.
You read at least five pages.
If all of the given days are successful, return "Resolution on track: N day streak." Where N is the number of successful days.

If one or more days is not a success, return "Resolution failed on day X: N day streak.". Where X is the day number of the first unsuccessful day, and N is the number of successful days before the first unsuccessful day
*/

function resolutionStreak(days) {
    let count = 0;
    for(let i = 0; i < days.length;i++){
        if(days[i][0] >= 10000 && days[i][1] <=120 && days[i][2] >=5){
            count++;
        } else{
            break;
        }
    }
    //console.log(count);
    if(count === days.length){
        return `Resolution on track: ${count} day streak.`
    } else{
        return `Resolution failed on day ${count+1}: ${count} day streak.`
    }
}

console.log(resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]]));
console.log(resolutionStreak([[10000, 120, 5], [10950, 121, 11]]));