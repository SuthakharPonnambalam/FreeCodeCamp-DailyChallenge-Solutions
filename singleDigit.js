//Date: September 05, 2026

/*
Given an array of integers, find the numbers that appear once and return them as an array. 
*/


function singleDigit(arr) {
    let map = new Map()
    for(let i = 0;i<arr.length;i++){
        let count = 0;
        for(let j = 0;j<arr.length;j++){
                if(arr[i] === arr[j]){
                    count = count + 1;
                }
                map.set(arr[i], count);
        }
    }
    //console.log(map);
    let res = [];
    for (const [key, value] of map) {
        if(value === 1){
            res.push(key);
        }
    }
    return res;
}

console.log(singleDigit([4,1,2,1,2]));
console.log(singleDigit([1,2,3,1,2]));
console.log(singleDigit([4,1,2,2]));