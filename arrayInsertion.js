//Date: September 17, 2026

/*
Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.
*/

function insertIntoArray(arr, value, index) {
    let newArr = [];
    for(let i = 0;i<=index;i++){
        if(i === index){
            newArr.push(value);
        } else {
            newArr[i] = arr[i];
        }
    }
    //console.log(newArr);
    let tempArr = arr.slice(index);
    for(let j =0;j<tempArr.length;j++){
        newArr.push(tempArr[j]);
    }
    return newArr;
}

console.log(insertIntoArray([2, 4, 8, 10], 6, 2));