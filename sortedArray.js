//Date: September 22, 2026

/*
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted".
*/

function isSorted(arr) {
    let set = new Set();
    for(let i = 0;i<arr.length-1;i++){
        let temp = arr[i+1] - arr[i];
        if(temp > 0){
            set.add('Ascending');
        } else if(temp < 0){
            set.add('Descending');
        } else {
            set.add('NS');
        }
    }
    if(set.size === 1){
        let [val] = set;
        return val;
    }
    return 'Not sorted';
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([10, 8, 6, 4, 2]));
console.log(isSorted([1, 3, 2, 4, 5]));
console.log(isSorted([3.14, 2.71, 1.61, 0.57]));