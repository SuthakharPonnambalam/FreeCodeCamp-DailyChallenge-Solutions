//Date: August 29, 2026

/*
Given a number, determine whether it is a pronic number.
A pronic number is the product of two consecutive integers. For example, 6 is pronic because 2 * 3 = 6.
*/

function isPronic(n) {
  if(n === 0){
    return true;
  }
  let factors = [];
  for(let i = 1; i <= n; i++){
    if(n%i === 0){
        factors.push(i);
    }
  }
  //console.log(factors);
  for(let i =0;i<factors.length;i++){
    for(let j=i;j<factors.length;j++){
        let rem = Math.abs(factors[i] - factors[j]);
        //console.log(rem);
        if(rem === 1 && (factors[i] * factors[j]) === n){
            return true;
        }
    }
  }
  return false;
}
