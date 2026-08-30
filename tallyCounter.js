//Date: August 29, 2026
/*
Given a string of tally marks, return the total count represented.

Each pipe "|" represents one count.
Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
Groups are separated by a space.
*/

function getTallyCount(str) {
    let count = 0;
    let arr = str.split(' ');
    //console.log(arr);
    for(let i=0;i<arr.length;i++){
        let subStr = arr[i];
        for(let j=0; j<subStr.length;j++){
            if(subStr[j] === '|' || subStr[j] === '/'){
                count++;
            }
        }
    }
    return count;
}

console.log(getTallyCount("||||/ ||"));
console.log(getTallyCount("||||/ |||"));
console.log(getTallyCount("||||/ ||||/ ||||/ ||"));
console.log(getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |"));