//Date: September 26, 2026

/*
Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.

1 gallon equals 3.78541 liters.
If the airplane already has enough fuel, return 0.
You can only add whole gallons.
Do not include decimals in the return number.
*/

function fuelToAdd(currentGallons, requiredLiters) {
    let actualLiters = Math.round(currentGallons * 3.78541);
    //console.log(actualLiters);

    if(actualLiters > requiredLiters){
        return 0;
    }
    else {
        let differnceInLiters = requiredLiters - actualLiters;
        //console.log(differnceInLiters);

        let gallonsNeeded = Math.ceil(differnceInLiters/3.78541);
        //console.log(gallonsNeeded);
        return gallonsNeeded;
    }
    
}

console.log(fuelToAdd(5, 40));
console.log(fuelToAdd(10, 30));
console.log(fuelToAdd(0, 1));
console.log(fuelToAdd(896, 20500));
console.log(fuelToAdd(1000, 50000));