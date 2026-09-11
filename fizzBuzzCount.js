//Date: September 05, 2026

/*
Given a start and end number, count the number of fizz and buzz appearances in the range (inclusive).

Numbers divisible by 3 count as a fizz.
Numbers divisible by 5 count as a buzz.
Numbers divisible by both 3 and 5 count as both a fizz and a buzz.
Return an object or dictionary with the counts in the format: { fizz, buzz }.
*/
function fizzBuzzCount(start, end) {
    let fizzCount = 0;
    let buzzCount = 0;
    for(let i = start;i <= end;i++){
        if(i%3 === 0 && i%5 === 0){
            fizzCount++;
            buzzCount++;
        } else if(i%3 === 0 && i%5 !== 0){
            fizzCount++;
        } else if(i%3 !==0 && i%5 === 0){
            buzzCount++;
        } else {}
    }
    //console.log(fizzCount, buzzCount);
    let result = {
        fizz: fizzCount,
        buzz: buzzCount
    }
    return result;
}

console.log(fizzBuzzCount(1, 11));
console.log(fizzBuzzCount(14, 41));
console.log(fizzBuzzCount(24, 100));
console.log(fizzBuzzCount(-635, -14));
console.log(fizzBuzzCount(-5432, 6789));