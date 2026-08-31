//Date: August 31, 2026
/*
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
*/

let arr = [];

function squaresWithThree(n) {
    let totalCount = 0;
    for(let i=1; i<=n; i++){
        let squaredNum = Math.pow(i, 2);
        let doesThreeExist = checkThreeExists(squaredNum);

        if(doesThreeExist === true){
            totalCount++;
        }
    }
    return totalCount;
}

const checkThreeExists = (num) => {
    num = String(num);
    let count = 0;
    arr = num.split('');
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === '3'){
            count++;
        }
    }
    if(count > 0){
        return true;
    }
    return false;
}

console.log(squaresWithThree(1));
console.log(squaresWithThree(10));
console.log(squaresWithThree(100));
console.log(squaresWithThree(1000));
console.log(squaresWithThree(10000));