//Date: September 22, 2026

/*
Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:

Average Score	Letter Grade
97-100	"A+"
93-96	"A"
90-92	"A-"
87-89	"B+"
83-86	"B"
80-82	"B-"
77-79	"C+"
73–76	"C"
70-72	"C-"
67-69	"D+"
63-66	"D"
60–62	"D-"
below 60	"F"
Calculate the average by adding all scores in the array and dividing by the total number of scores.
*/

function getAverageGrade(scores) {
    let sum = 0;
    for(let i = 0;i < scores.length;i++){
        sum += scores[i];
    }
    let avg = sum/scores.length;

    if(avg >= 97){
        return 'A+';
    } else if(avg >= 93){
        return 'A';
    } else if(avg >= 90){
        return 'A-';
    } else if(avg >= 87){
        return 'B+';
    } else if(avg >= 83){
        return 'B';
    } else if(avg >= 80){
        return 'B-';
    } else if(avg >= 77){
        return 'C+';
    } else if(avg >= 73){
        return 'C';
    } else if(avg >= 70){
        return 'C-';
    } else if(avg >= 67){
        return 'D+';
    } else if(avg >= 63){
        return 'D';
    } else if(avg >= 60){
        return 'D-';
    } else{
        return 'F';
    }
}

console.log(getAverageGrade([92, 91, 90, 94, 89, 93]));
console.log(getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]));