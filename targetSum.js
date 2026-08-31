//Date: August 30, 2026

/*
Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.
*/

function findTarget(arr, target) {
    let resultArray = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(i !== j){
                if(arr[i] + arr[j] === target){
                    resultArray.push(i);
                    resultArray.push(j);
                }
            }
        }
    }
    if(resultArray.length !== 0){
        return resultArray;
    } else {
        return 'Target not found';
    }
}

console.log(findTarget([2, 7, 11, 15], 9));
console.log(findTarget([3, 2, 4, 5], 6));
console.log(findTarget([1, 3, 5, 6, 7, 8], 15));
console.log(findTarget([1, 3, 5, 7], 14));
