//Date: September 2, 2026

/*
Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.
*/

function sortNumbers(str) {
    let strArray = str.split(',');
    for(let i = 0; i<strArray.length;i++){
        strArray[i] = Number(strArray[i]);
    }
    return strArray.sort((a,b) => a - b);
}

console.log(sortNumbers("3,1,2"));