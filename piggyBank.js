//Date: August 31, 2026
/*
Given an object representing a piggy bank, return the total value as a string formatted as "$D.CC".

The object may contain any of the following:

Coin	Value
pennies	$0.01
nickels	$0.05
dimes	$0.10
quarters	$0.25
*/

function piggyBank(coins) {
    let total = 0;
    let pennies = 0;
    let nickels = 0;
    let dimes = 0;
    let quarters = 0;

    if(Object.hasOwn(coins, 'pennies')){
        pennies = coins.pennies * 0.01;
    } else {
        pennies = 0;
    }
    if(Object.hasOwn(coins, 'nickels')){
        nickels = coins.nickels * 0.05;
    } else {
        nickels = 0;
    }
    if(Object.hasOwn(coins, 'dimes')){
        dimes = coins.dimes * 0.10;
    } else {
        dimes = 0;
    }
    if(Object.hasOwn(coins, 'quarters')){
        quarters = coins.quarters * 0.25;
    } else {
        quarters = 0;
    }
    total = (pennies + nickels + dimes + quarters).toFixed(2);
    return '$'+String(total);
}

console.log(piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }));
console.log(piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }));
console.log(piggyBank({ nickels: 8, dimes: 6, quarters: 5 }))