//Date: August 28, 2026

function calculateHandicap(scores, pars) {
  let average = 0;
  let sum = 0;
  for(let i=0;i<scores.length;i++){
    sum = sum + (scores[i] - pars[i]);
  }
  average = sum/scores.length
  return average.toFixed(1);
}