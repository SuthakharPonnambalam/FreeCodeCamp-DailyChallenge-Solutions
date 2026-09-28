//Date: September 28, 2026

/*
Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

The first line of a CSV file contains headings separated by commas.
Remove any leading or trailing whitespace from each heading.
*/

function getHeadings(csv) {
    let arr = csv.split(',');
    let res = [];
    for(let i = 0; i < arr.length;i++){
        res.push(arr[i].trim());
    }
    return res;
}


console.log(getHeadings("name,age,city"));
console.log(getHeadings("username , email , signup date "));
console.log(getHeadings("first name,last name,phone"));