//Date: September 22, 2026

/*
Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

Return:

"Hole in one!" if it took one stroke.
"Eagle" if it took two strokes less than par.
"Birdie" if it took one stroke less than par.
"Par" if it took the same number of strokes as par.
"Bogey" if it took one stroke more than par.
"Double bogey" if took two strokes more than par.
*/

function golfScore(par, strokes) {
    if(strokes === par){
        return 'Par';
    } else if( strokes === 1){
        return 'Hole in one!';
    } else if (par - strokes === 1){
        return 'Birdie';
    } else if (par - strokes === 2){
        return 'Eagle';
    } else if (strokes - par === 1){
        return 'Bogey';
    } else if(strokes - par === 2){
        return 'Double Bogey';
    } else{}
}

console.log(golfScore(3, 3));
console.log(golfScore(4, 3));
console.log(golfScore(5, 3));