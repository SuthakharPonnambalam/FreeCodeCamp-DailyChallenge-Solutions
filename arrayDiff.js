//Date: September 10, 2026

/*
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.
*/

function arrayDiff(arr1, arr2) {
    let common = [];
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                common.push(arr1[i]);
                break; 
            }
        }
    }
    //console.log(common);
    for(let a = 0; a < arr1.length;a++){
        if(!common.includes(arr1[a])){
            res.push(arr1[a]);
        }
    }
     for(let b = 0; b < arr2.length;b++){
        if(!common.includes(arr2[b])){
            res.push(arr2[b]);
        }
    }
    res = res.sort((a,b) => a.localeCompare(b));
    return res;
}

console.log(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]));
console.log(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]));
console.log(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]));
console.log(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]));
console.log(arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]));