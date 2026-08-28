//Date: August 27, 2026

function spaceJam(s) {
  let trimmedS = s.trim();
  let newS = trimmedS.split(/\s+/).join('');
  console.log(newS);
  let result = '';
  for(let i=0; i<newS.length;i++){
    result = result + '  ' + newS[i];
  }
  return result.toUpperCase().trim();
}