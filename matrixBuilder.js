//Date: September 28, 2026

/*
Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]
*/

function buildMatrix(rows, cols) {
    let arr = [];
    for(let i = 0; i < rows;i++){
        let temp = [];
        for(let j = 0; j < cols; j++){
            temp.push(0);
        }
        arr.push(temp);
    }
    return arr;
}

console.log(buildMatrix(2, 3));

