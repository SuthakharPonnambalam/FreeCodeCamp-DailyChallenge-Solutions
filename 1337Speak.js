//Date: September 2, 2026

/*
Given a lowercase string, return it translated into leet speak by replacing the letters below with their leet substitutions:

Letter	Leet
a	4
e	3
g	9
i	1
l	1
o	0
s	5
t	7
Characters with no substitution are left unchanged.
*/

function makeLeet(str) {
    let result = '';
    let strArray = str.split('');

    for(let i=0; i<strArray.length;i++){
        switch(strArray[i]){
            case 'a': result = result + '4';break;
            case 'e': result = result + '3';break;
            case 'g': result = result + '9';break;
            case 'i': result = result + '1';break;
            case 'l': result = result + '1';break;
            case 'o': result = result + '0';break;
            case 's': result = result + '5';break;
            case 't': result = result + '7';break;
            default:
                result = result + strArray[i];
        }
    }
    return result;
}

console.log(makeLeet("cool"));
console.log(makeLeet("hacker"));
console.log(makeLeet("satellite"));
console.log(makeLeet("abcdefghijklmnopqrstuvwxyz"));