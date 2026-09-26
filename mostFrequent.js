//Date: September 25, 2026

/*
Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.
*/

function mostFrequent(arr) {
  let map = new Map();
  for(let i = 0; i < arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i])+1);
    } else{
        map.set(arr[i], 1);
    }
  }
  let sortedMap = new Map(
        [...map].sort((a, b) => b[1] - a[1])
    );
    return sortedMap.keys().next().value;
}

console.log(mostFrequent(["a", "b", "a", "c"]))