//Date: September 27, 2026

/*
Given an array of recipe ingredients and a number to scale the recipe, return an array with the quantities scaled accordingly.

Each item in the given array will be a string in the format: "quantity unit ingredient". For example "2 C Flour".
Scale the quantity by the given number. Do not include any trailing zeros and do not convert any units.
Return the scaled items in the same order they are given.
*/

function scaleRecipe(ingredients, scale) {
    let result = [];
    for(let i = 0; i < ingredients.length;i++){
        let items = ingredients[i].split(' ');
        let double = Number(items[0])*scale;
        let newQuantity = `${double}`;
        items[0] = newQuantity;
        //console.log(items.join(' '));
        result.push(items.join(' '));
    }
    return result;
}

console.log(scaleRecipe(["2 C Flour", "1.5 T Sugar"], 2));
console.log(scaleRecipe(["4 T Flour", "1 C Milk", "2 T Oil"], 1.5));
console.log(scaleRecipe(["3 C Milk", "2 C Oats"], 0.5));
console.log(scaleRecipe(["2 C All-purpose Flour", "1 t Baking Soda", "1 t Salt", "1 C Butter", "0.5 C Sugar", "0.5 C Brown Sugar", "1 t Vanilla Extract", "2 C Chocolate Chips"], 2.5));
