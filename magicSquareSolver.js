//Date: August 29, 2026
/*
Given a 3x3 grid with one missing number (represented as 0), return the missing number that completes the magic square, or "impossible" if no valid number exists.

A magic square is a grid where every row, column, and diagonal adds up to the same number.
*/


function solveMagicSquare(grid) {
    let resultSum = [];
    let zeroMatrixRow = 0;
    let zeroMatrixColumn = 0
    for(let i=0;i<grid.length;i++){
        let sum = 0;
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j] === 0){
                zeroMatrixRow = i;
                zeroMatrixColumn = j;
            }
            sum = sum + grid[i][j]
        }
        resultSum.push(sum);
    }
    let sortedResult = resultSum.sort();
    let result1 = sortedResult[1] - sortedResult[0];
    let result2 = sortedResult[2] - sortedResult[0];
    //console.log(result1, result2);
    if(result1 === result2){
        grid[zeroMatrixRow][zeroMatrixColumn] = result1;
    }
    //console.log(grid);

    let resultSet = new Set();
    for(let i = 0; i<grid.length;i++){
        let sum = 0;
        for(let j = 0; j < grid[i].length;j++){
            sum = sum + grid[i][j];
            //console.log(i,j);
        }
        //console.log(sum);
        resultSet.add(sum);
    }
    for(let col = 0;col<3;col++){
        let sum = 0;
        for(let row = 0; row<3;row++){
            sum = sum + grid[row][col];;
        }
        resultSet.add(sum);
    }
    
    let mainDiagonalSum = 0; // Top-left to bottom-right (00, 11, 22)
    let antiDiagonalSum = 0; // Top-right to bottom-left (02, 11, 20)

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            // Main diagonal condition
            if (row === col) {
                mainDiagonalSum += grid[row][col];
            }
            
            // Anti-diagonal condition
            if (row + col === grid.length - 1) {
                antiDiagonalSum += grid[row][col];
            }
        }
    }
    resultSet.add(mainDiagonalSum);
    resultSet.add(antiDiagonalSum);
    //console.log(resultSet);

    if(resultSet.size === 1){
        return result1;
    } 
    return 'impossible';
}