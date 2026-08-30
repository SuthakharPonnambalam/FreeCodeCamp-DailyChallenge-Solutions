//Date: August 30, 2026
/*
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.
Only include one instance of each value in the returned array.

*/

function findDuplicates(arr) {
    let arraySet = new Set();
    let set = new Set();
    for(const value of arr){
        if(set.has(value)){
            arraySet.add(value)
        } else {
            set.add(value);
        }
    }
    //console.log(arraySet);
    let resultArray = [];
    for(const val of arraySet){
        resultArray.push(val);
    }
    return (resultArray.sort((a, b) => a - b));
}


console.log(findDuplicates([1, 2, 3, 4, 5, 1]));
console.log(findDuplicates([1, 2, 3, 4, 1, 2]));
console.log(findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]));