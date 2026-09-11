//Date: September 1, 2026
/*
Given a Morse code string, return the decoded message using the following table:

Code	Letter	Code	Letter
.-	A	-.	N
-...	B	---	O
-.-.	C	.--.	P
-..	D	--.-	Q
.	E	.-.	R
..-.	F	...	S
--.	G	-	T
....	H	..-	U
..	I	...-	V
.---	J	.--	W
-.-	K	-..-	X
.-..	L	-.--	Y
--	M	--..	Z
Letters are separated by a single space
Words are separated by three spaces
*/


const morse = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z"
};

function decodeMorse(code) {
    let codeArray = code.split(/\s{3}/);
    let resultString = '';
    for(let i = 0; i< codeArray.length; i++){
        let result = computeChars(codeArray[i]);
        //console.log(result);
        resultString = resultString + result;
    }
    return resultString.trim();
}

const computeChars = (codeArray) => {
    let str = '';
    let input = codeArray.split(' ');
    //console.log(input);
    for(let i = 0; i < codeArray.length; i++){

        if(Object.hasOwn(morse, input[i])){
            str = str + morse[input[i]];
        }
    }
    return str+' ';
}

console.log(decodeMorse("... --- ..."));
console.log(decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--."));
console.log(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -.."));
console.log(decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --."));
