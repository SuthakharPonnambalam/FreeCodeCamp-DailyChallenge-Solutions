//Date: October 2, 2026

/*
Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.

Prices will be given in the format: "$N.NN".
Custom tip percents will be given in this format: "25%".
Return amounts in the same "$N.NN" format, rounded to two decimal places.
For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].
*/

function calculateTips(mealPrice, customTip) {
    let tips = [];
    let price = mealPrice.slice(1);
    price = Number(price);

    let tenPercent = (price * 0.15).toFixed(2);
    let twentyPercent  = (price * 0.20).toFixed(2);

    let customValue = customTip.slice(0, customTip.length-1);
    let customTipAmout = (price * Number(customValue)/100).toFixed(2);

    tips.push(`$${tenPercent}`);
    tips.push(`$${twentyPercent}`);
    tips.push(`$${customTipAmout}`);

    return tips;
}

console.log(calculateTips("$10.00", "25%"))