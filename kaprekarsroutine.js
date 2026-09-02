//Date: September 1, 2026

/*
Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:

Arrange the digits in descending order to form the largest number
Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
Subtract the smaller from the larger
Repeat with the new number
*/

function kaprekar(n) {
    let count = 0;
    let newNumber = n;
    while(newNumber !== 6174){
        count = count + 1;
        let sortDesc = sortFunc(newNumber, 'desc'); 
        let sortAsc = sortFunc(newNumber, 'asc');
        //console.log(sortDesc, sortAsc);
        let min, max;
        if(sortDesc > sortAsc){
            max = sortDesc;
            min = sortAsc;
        } else {
            max = sortAsc;
            min = sortDesc;
        }
        let diff = max - min;
        //console.log(diff);
        newNumber = diff;
    }
    //console.log(count);
    return count;
}

const sortFunc = (n, order) => {
    let arr = [];
    while(n > 0){
        let rem = n%10;
        arr.push(rem);
        n = Math.floor(n/10);
    }
    switch(order){
        case 'desc': arr = arr.sort((a,b) => b - a);break;
        case 'asc': arr = arr.sort((a,b) => a - b);break;
    }
    
    let number = '';
    for(let i=0; i<arr.length;i++){
        number = number + String(arr[i]);
    }
    return Number(number);
}

console.log(kaprekar(1234));
console.log(kaprekar(2025));
console.log(kaprekar(3164));


