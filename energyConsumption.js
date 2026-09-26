//Date: September 22, 2026

/*
Given the number of Calories burned during a workout, and the number of watt-hours used by your electronic devices during that workout, determine which one used more energy.

To compare them, convert both values to joules using the following conversions:

1 Calorie equals 4184 joules.
1 watt-hour equals 3600 joules.
Return:

"Workout" if the workout used more energy.
"Devices" if the device used more energy.
"Equal" if both used the same amount of energy.
*/

function compareEnergy(caloriesBurned, wattHoursUsed) {
    let totalCaloriesEnergy = caloriesBurned * 4184;
    let totalWattEnergy = wattHoursUsed * 3600;

    if(totalCaloriesEnergy > totalWattEnergy){
        return 'Workout';
    } else if(totalWattEnergy > totalCaloriesEnergy){
        return 'Devices';
    } else{
        return 'Equal';
    }
}

console.log(compareEnergy(250, 50));
