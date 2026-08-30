//Date: Aiugust 29, 2026
/*
Given two numbers, determine if their ratio approximates the golden ratio.
Use a golden ratio of 1.618
Allow a tolerance of 0.01
*/

function isGoldenRatio(a, b) {
  let min = 0, max = 0;
  if(a > b){
    max = a;min = b;
  } else {
    min = a;max = b;
  }

  let ratio = Number((max/min).toFixed(3));
  let originalRatio = ratio;
  if( ratio >= 1.608 && ratio <= 1.628){
    return true;
  }
  return false;
}