//Date: September 26, 2026

/*
Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.

If multiple values are tied for most frequent, remove all of them.
Do not change any of the other elements or their order.
*/

function purgeMostFrequent(arr) {   
    let map = new Map();
    for(let i = 0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    //console.log(sortedMap);

    let maxValue = sortedMap.values().next().value;
    //console.log(maxValue);
    for(const [key, value] of sortedMap){
        if(value !== maxValue){
            sortedMap.delete(key);
        }
    }
    
    let temp = [...sortedMap.keys()];
    let result = [];

    for(let i = 0; i < arr.length;i++){
        if(temp.includes(arr[i])){
            continue;
        } else{
            result.push(arr[i]);
        }
    }
    //console.log(temp);

    return result;
}

console.log(purgeMostFrequent([1, 2, 2, 3]));
console.log(purgeMostFrequent([5, 5, 5, 5]));
console.log(purgeMostFrequent([10, 12, 7, 3, 7, 7, 12, 12]));
console.log(purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]));
console.log(purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]));