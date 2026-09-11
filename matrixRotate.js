//Date: September 7, 2026

/*
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4
You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2
*/

function rotate(matrix) {
    let result =[];
    for(let i =0; i < matrix.length;i++){
        let temp = [];
        for(let j = matrix.length-1; j >=0;j--){
            //console.log(matrix[j][i]);
            temp.push(matrix[j][i]);
        }
    result.push(temp);
    }
    return result;
}

console.log(rotate([[1, 2], [3, 4]]));
