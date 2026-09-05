//Date: September 3, 2026

/*
Given an array and a chunk size, return a new array containing chunks of the original array of the specified size.

If the original array cannot be split evenly, the final chunk will contain the remaining elements.
*/


function chunkArray(arr, size) {
    let result = [];
    for(let i = 0; i < arr.length; i+=size){
        let temp = arr.slice(i,i+size);
        result.push(temp);
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));
console.log(chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 3));
console.log(chunkArray(["a", "b", "c", "d", "e"], 1));
console.log(chunkArray([1, 2, 3], 5));