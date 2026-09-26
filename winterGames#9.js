//Date: September 19, 2026

/*
Given a string representing the curves on a skeleton track, determine the difficulty of the track.

The given string will only consist of the letters:

"L" for a left turn
"R" for a right turn
"S" for a straight segment
Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

All other curves add 5 points each (all other "L" or "R" characters).

Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:

"Easy" if the total is 0 - 100
"Medium" if the total is 101-200
"Hard" if the total is over 200
*/

function getDifficulty(track) {
    let result = 0;
    for(let i = 0; i < track.length;i++){
        if(i === 0){
            switch(track[i]){
                case 'S': result +=0; break;
                case 'L': 
                case 'R': result +=5; break;
            }
        }
        else {
            if((track[i] === 'L' && track[i-1] === 'R') || (track[i] === 'R' && track[i-1] === 'L')){
                result += 15;
            } else {
                switch(track[i]){
                case 'S': result +=0; break;
                case 'L': 
                case 'R': result +=5; break;
            }
            }
        }
        //console.log(i, result);
    }
    if(result <=100){
        return 'Easy';
    } else if(result >=101 && result <= 200){
        return 'Medium';
    } else {
        return 'Hard';
    }
}

console.log(getDifficulty("SLSLLSRRLSRLRL"));
console.log(getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS"));
console.log(getDifficulty("SRRRRLSLLRLRSSRLSRL"));