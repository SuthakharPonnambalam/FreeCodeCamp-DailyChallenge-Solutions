//Date: September 25, 2026

/*
Given an array, return the second largest distinct number.
*/

function secondLargest(arr) {
    arr = arr.sort((a,b) => b - a);
    let finalArr = [];
    for(let i = 0; i < arr.length;i++){
        if(finalArr.includes(arr[i])){
            continue;
        } else{
            finalArr.push(arr[i]);
        }
    }
    return finalArr[1];
}

console.log(secondLargest([1, 2, 3, 4]));
console.log(secondLargest([2, 3, 4, 6, 6]));