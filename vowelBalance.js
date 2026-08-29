//Date: August 28, 2026
/*
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.
*/

function isBalanced(s) {
  let length = s.length;
  let subStringOne = '', subStringTwo = '';
  if(length %2 === 0){
    let middle = length/2;
    subStringOne = s.slice(0,middle);
    subStringTwo = s.slice(middle);
  } else {
    let middle = Math.floor(length/2);
    subStringOne = s.slice(0, middle);
    subStringTwo = s.slice(middle+1);
  }
  let vowelCountOne = countVowel(subStringOne);
  let vowelCountTwo = countVowel(subStringTwo);
  return (vowelCountOne === vowelCountTwo) ? true : false;
}

const countVowel = (str) => {
    let count = 0;
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count += 1;
        }
    }
    return count;
}

console.log(isBalanced("racecar"));
console.log(isBalanced("Lorem Ipsum"));
console.log(isBalanced("Kitty Ipsum"));
console.log(isBalanced("string"));
console.log(isBalanced(" "));
