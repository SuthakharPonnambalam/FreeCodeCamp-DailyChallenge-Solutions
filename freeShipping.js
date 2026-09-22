//Date: September 22, 2026

/*
Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

The given array will contain items from the list below:

Item	Price
"shirt"	34.25
"jeans"	48.50
"shoes"	75.00
"hat"	19.95
"socks"	15.00
"jacket"	109.95
*/

function getsFreeShipping(cart, minimum) {
    let total = 0;
    for(let i = 0; i < cart.length;i++){
        switch(cart[i]){
            case 'shirt': total += 34.25; break;
            case 'jeans': total += 48.50; break;
            case 'shoes': total += 75.00; break;
            case 'hat': total += 19.95; break;
            case 'socks': total += 15.00; break;
            case 'jacket': total += 109.95; break;
        }
    }
    if(total >= minimum){
        return true;
    }
    return false;
}

console.log(getsFreeShipping(["hat", "socks"], 50));