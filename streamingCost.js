//Date: September 04, 2026

/*
Given an array representing movies in the cart of your streaming service, and a string for your subscription tier, return the total cost of the movies.

Each item in the cart is an object with a "format" ("HD" or "4K") and a "type" ("rent" or "buy"). Their costs are:

"rent"	"buy"
"HD"	$3.99	$12.99
"4K"	$5.99	$19.99
Apply the following subscription tier discounts:

"none": full price
"basic": 10% off
"premium": 25% off
Return the total cost rounded to two decimal places in the format "$D.CC".
*/

function getStreamingBill(cart, subscription) {
    let price = 0;
    let total = 0;
    for(let i = 0; i < cart.length;i++){
        switch(cart[i].format){
            case 'HD':
                if(cart[i].type === 'rent'){
                    price = 3.99;
                } else if(cart[i].type === 'buy'){
                    price = 12.99
                } else {}
                break;
            case '4K':
                if(cart[i].type === 'rent'){
                    price = 5.99;
                } else if(cart[i].type === 'buy'){
                    price = 19.99
                } else {}
                break;
        }
        total += price;
    }
    //console.log(`before discount:${total}`);
    total = getDiscount(total, subscription);
    return `$${total}`;
}

const getDiscount = (price, subscription) => {
    switch(subscription){
        case 'none':
            return Number(price.toFixed(2));
        case 'basic':
            price = Number(price - (price * 0.10)).toFixed(2);
            return price;
        case 'premium':
            price = Number(price - (price * 0.25)).toFixed(2);
            return price;
    }
}

console.log(getStreamingBill([{ format: "HD", type: "rent" }], "none"));
console.log(getStreamingBill([{ format: "HD", type: "buy" }], "premium"));
console.log(getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic"));
console.log(getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium"));
console.log(getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "basic"));
console.log(getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none"));