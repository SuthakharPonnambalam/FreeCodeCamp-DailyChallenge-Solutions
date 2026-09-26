//Date: September 16, 2026

/*
Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

The given string will contain the following characters, each representing a type of bean:

An apostrophe (') is a light roast bean worth 1 point each.
A dash (-) is a medium roast bean worth 2 points each.
A period (.) is a dark roast bean worth 3 points each.
The roast level is determined by the average of all the beans.

Return:

"Light" if the average is less than 1.75.
"Medium" if the average is 1.75 to 2.5.
"Dark" if the average is greater than 2.5.
*/

function detectRoast(beans) {
    let sum = 0;
    for(let i = 0; i < beans.length;i++){
        if(beans[i] === "'"){
            sum = sum + 1;
        } else if(beans[i] === '-'){
            sum = sum + 2;
        } else if(beans[i] === '.'){
            sum = sum + 3;
        } else {}
    }
    let avg = Number((sum/beans.length).toFixed(2));
    if(avg> 2.5){
        return 'Dark';
    } else if( avg >=1.75 && avg <=2.5){
        return 'Medium';
    } else {
        return 'Light';
    }
}

console.log(detectRoast("''-''''''-'-''--''''"));