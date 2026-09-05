//Date: September 05, 2026

/*
Given a string for a coffee order, identify any menu items and return a formatted order.

Use the following menu items and prices:

Item	Price
"cold brew"	$4.50
"oat latte"	$5.00
"cappuccino"	$4.75
"espresso"	$3.00
"vanilla syrup"	$0.75
"caramel drizzle"	$0.60
"extra shot"	$0.50
"oat milk"	$0.75
"cream"	$0.75
Return a string with the matched items joined by " + ", followed by a colon and space (": "), and the total price.

For example, given "I'd like an oat latte with vanilla syrup and an extra shot please.", return "oat latte + vanilla syrup + extra shot: $6.25"

Items should appear in the order they appear in the menu and the total price should always have two decimal places.
*/


let menu = ["cold brew",
            "oat latte",
            "cappuccino",
            "espresso",
            "vanilla syrup",
            "caramel drizzle",
            "extra shot",
            "oat milk",
            "cream"];

function formatCoffeeOrder(order) {
    let items = [];
    for(let i = 0; i <menu.length;i++){
        if(order.includes(menu[i])){
            items.push(menu[i]);
        }
    }

    let total = 0;
    let result = '';
    for(let j = 0; j < items.length;j++){
        total = total + getPrice(items[j]);
        if(j === items.length-1){
            result = result + items[j]
        } else {
            result = result + items[j] + ' + ';
        }   
    }
    total = total.toFixed(2);
    return `${result}: $${total}`;
}

const getPrice = (item) => {
    switch(item){
        case "cold brew": return 4.5; 
        case "oat latte": return 5;
        case "cappuccino": return 4.75;
        case "espresso": return 3;
        case "vanilla syrup": return 0.75;
        case "caramel drizzle": return 0.60;
        case "extra shot": return 0.50;
        case "oat milk": return 0.75;
        case "cream": return 0.75;
    }
}

console.log(formatCoffeeOrder("I'd like an oat latte with vanilla syrup and an extra shot please."));
console.log(formatCoffeeOrder("Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk."));
console.log(formatCoffeeOrder("Just an espresso please."));