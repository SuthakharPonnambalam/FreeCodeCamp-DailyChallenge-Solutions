//Date: September 16, 2026

/*
Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

Years Married	Milestone
1	"Paper"
5	"Wood"
10	"Tin"
25	"Silver"
40	"Ruby"
50	"Gold"
60	"Diamond"
70	"Platinum"
If they haven't reached the first milestone, return "Newlyweds".
*/

function getMilestone(years) {
    if(years === 0){
        return 'Newlyweds';
    }
    let arr = [];
    for(let i = 1;i<=years;i++){
        if( i === 1){
            arr.push('Paper');
        } else if ( i === 5){
            arr.push('Wood');
        } else if ( i === 10){
            arr.push('Tin');
        } else if ( i === 25){
            arr.push('Silver');
        } else if ( i === 40){
            arr.push('Ruby');
        } else if ( i === 50){
            arr.push('Gold');
        } else if ( i === 60){
            arr.push('Diamond');
        } else if( i === 70){
            arr.push('Platinum')
        } else{
            continue;
        }
    }
    return arr.pop();
}

console.log(getMilestone(0));
console.log(getMilestone(8));