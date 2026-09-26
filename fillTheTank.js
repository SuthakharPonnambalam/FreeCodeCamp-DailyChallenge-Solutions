//Date: September 18, 2026

/*
Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.

tankSize is the total capacity of the tank in gallons.
fuelLevel is the current amount of fuel in the tank in gallons.
pricePerGallon is the cost of one gallon of fuel.
The returned value should be rounded to two decimal places in the format: "$d.dd".
*/

function costToFill(tankSize, fuelLevel, pricePerGallon) {
    let fuelNeeded = tankSize - fuelLevel;
    let cost = (fuelNeeded * pricePerGallon).toFixed(2);

    return `${cost}`;
}

console.log(costToFill(20, 0, 4.00));
console.log(costToFill(15, 10, 3.50));
console.log(costToFill(12, 12, 4.99));
console.log(costToFill(15, 9.5, 3.98));