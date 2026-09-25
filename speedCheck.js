//Date: September 25, 2026

/*
Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

1 mile equals 1.60934 kilometers.
If you are traveling less than or equal to the speed limit, return "Not Speeding".
If you are traveling 5 KPH or less over the speed limit, return "Warning".
If you are traveling more than 5 KPH over the speed limit, return "Ticket".
*/

function speedCheck(speedMph, speedLimitKph) {
  let speed = Math.round(speedMph * 1.60934);   

  let diff = speed - speedLimitKph;

  if(diff < 0){
    return 'Not Speeding';
  } else if (diff >0 && diff <=5){
    return 'Warning';
  } else {
    return 'Ticket';
  }

}

console.log(speedCheck(30, 70));
console.log(speedCheck(60, 90));
console.log(speedCheck(65, 100));