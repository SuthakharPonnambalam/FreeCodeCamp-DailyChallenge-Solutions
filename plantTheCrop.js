//Date: September 22, 2026

/*
Given an integer representing the size of your farm field, and "acres" or "hectares" representing the unit for the size of your farm field, and a type of crop, determine how many plants of that type you can fit in your field.

1 acre equals 4046.86 square meters.
1 hectare equals 10,000 square meters.
Here's a list of crops that will be given as input and how much space a single plant takes:

Crop	Space per plant
"corn"	1 square meter
"wheat"	0.1 square meters
"soybeans"	0.5 square meters
"tomatoes"	0.25 square meters
"lettuce"	0.2 square meters
Return the number of plants that fit in the field, rounded down to the nearest whole plant.
*/

function getNumberOfPlants(fieldSize, unit, crop) {
    let totalSqMts = 0;
    let totalCrops = 0;

    switch(unit){
        case 'acres':
            totalSqMts = fieldSize * 4046.86;
            break;
        case 'hectares':
            totalSqMts = fieldSize * 10000;
            break;
    }

    switch(crop){
        case 'corn':
            totalCrops = Math.floor(totalSqMts/1);
            break;
        case 'wheat':
            totalCrops = Math.floor(totalSqMts/0.1);
            break;
        case 'soybeans':
            totalCrops = Math.floor(totalSqMts/0.5);
            break;
        case 'lettuce':
            totalCrops = Math.floor(totalSqMts/0.2);
            break;
        case 'tomatoes':
            totalCrops = Math.floor(totalSqMts/0.25);
            break;
    }
    return totalCrops;
}

console.log(getNumberOfPlants(1, "acres", "corn"));
console.log(getNumberOfPlants(2, "hectares", "lettuce"));