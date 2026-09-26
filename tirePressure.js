//Date: September 22, 2026

/*
Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

1 bar equals 14.5038 psi.
Return an array with the following values for each tire:

"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed.
*/

function tireStatus(pressuresPSI, rangeBar) {
  let base = 14.5038;
  let min = base * rangeBar[0];
  let max = base * rangeBar[1];
  let result = [];

  for(let i = 0; i < pressuresPSI.length;i++){
    if(pressuresPSI[i] >= min && pressuresPSI[i] <= max){
        result.push('Good');
    } else if(pressuresPSI[i] < min){
        result.push('Low');
    } else {
        result.push('High');
    }
  }
  return result;
}

console.log(tireStatus([32, 28, 35, 29], [2, 3]));
console.log(tireStatus([29, 26, 31, 28], [2.1, 2.5]));