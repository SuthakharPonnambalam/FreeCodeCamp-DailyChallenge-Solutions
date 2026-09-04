//Date: September 04, 2026

/*
Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
The original vowel should keeps its case.
Repeated vowels should be lowercase.
All non-vowel characters should keep their original case.
*/


function repeatVowels(str) {
    let result = '';
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
           str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
            count = count + 1;
            for(let j = 0; j<count;j++){
                if(j === 0 && (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90))
                {
                    result = result + str[i].toUpperCase();
                } else {
                    result = result + str[i].toLowerCase();
                }
            }
        }
        else{
            result = result + str[i];
        }
    }
    return result;
}

console.log(repeatVowels("hello world"));
console.log(repeatVowels("freeCodeCamp"));
console.log(repeatVowels("AEIOU"));