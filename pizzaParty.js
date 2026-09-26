//Date: September 8, 2026

/*
Given an array of hours worked today per person, return the number of pizzas to order for a pizza party.

Divide each person's hours worked by 3 to get their slice count.
You can't eat a partial slice, so round each person's slice count up to the nearest whole number.
Each person gets a minimum of two slices.
Each pizza has 8 slices. Round the total number of pizzas up to the nearest whole pizza.
*/

function getPizzasToOrder(hoursWorked) {
    let slices = 0;
    for(let i = 0; i < hoursWorked.length;i++){
        let slice = Math.ceil(hoursWorked[i]/3);
        if(slice < 2){
            slices = slices + 2;
        } else {
            slices += slice;
        }
    }
    let pizzaCount = Math.ceil(slices/8);
    return pizzaCount;
}

console.log(getPizzasToOrder([8, 8, 8]));
console.log(getPizzasToOrder([1, 2, 3, 4, 5]));
console.log(getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0]));