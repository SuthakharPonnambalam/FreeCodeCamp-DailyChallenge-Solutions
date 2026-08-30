//Date: August 29, 2026
/*
Given a pet type and age in human years, return the equivalent age in pet years using the following conversion table:

Pet	Multiplier
"dog"	7
"cat"	6
"rabbit"	8
"hamster"	30
"guinea pig"	12
"goldfish"	6
"bird"	5
*/


function petYears(pet, age) {
  let animalAge = 0;
  switch(pet){
    case 'dog': animalAge = age * 7; break;
    case 'cat': animalAge = age * 6; break;
    case 'rabbit': animalAge = age * 8; break;
    case 'hamster': animalAge = age * 30; break;
    case 'guinea pig': animalAge = age * 12; break;
    case 'goldfish': animalAge = age * 6; break;
    case 'bird': animalAge = age * 5; break;
  }
  return animalAge;
}