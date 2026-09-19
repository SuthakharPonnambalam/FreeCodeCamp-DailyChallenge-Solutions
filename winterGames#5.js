//Date: September 19, 2020

/*
Given an array of finish times for a cross-country ski race, convert them into times behind the winner.

Given times are strings in "H:MM:SS" format.
Given times will be in order from fastest to slowest.
The winners time (fastest time) should correspond to "0".
Each other time should show the time behind the winner, in the format "+M:SS".
For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"].
*/

function getRelativeResults(results) {
    let seconds = [];
    for(let i = 0; i < results.length;i++){
        let timeInSecs = getSeconds(results[i]);
        seconds.push(timeInSecs);
    }
    //console.log(seconds);

    let diff = [];
    let base = seconds[0];
    for(let i = 0; i < seconds.length;i++){
        let secDifference = seconds[i] - base;
        diff.push(secDifference);
    }
    //console.log(diff);

    let resultArray = [];
    for(let i = 0;i<diff.length; i++){
        let actualTime = getFormattedTime(diff[i]);
        resultArray.push(actualTime);
    }
    resultArray[0] = `0`;
    return resultArray;
}

const getSeconds = (time) => {
    let timesArray = time.split(':');
    let hours = timesArray[0];
    let mins = timesArray[1];
    let seconds = timesArray[2];
    let total = Number(hours) * 3600 + Number(mins) * 60 + Number(seconds);

    return total;
}

const getFormattedTime = (time) => {
    //console.log(time);
    if(time < 60){
        if(time <= 9){
            return `+0:0${time}`;
        }
        return `+0:${time}`;
    } else {
        let min = Math.floor(time/60);
        let secs = time%60;
        if(secs <= 9){
            return `+${min}:0${secs}`;
        }
        return `+${min}:${secs}`;
    }
}

console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]));
console.log(getRelativeResults(["1:00:01", "1:00:05", "1:00:10"]));
console.log(getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]));