//Date: September 16, 2026

/*
Given an array of student exam scores and the score needed to pass it, return the number of students that passed the exam.
*/

function passingCount(scores, passingScore) {
    let count = 0;
    for(let i = 0; i < scores.length;i++){
        if(scores[i] >= passingScore){
            count += 1;
        }
    }
    return count;
}

console.log(passingCount([90, 85, 75, 60, 50], 70))