//Date: September 8, 2026

/*
Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.
*/

function buildAcronym(str) {
    let arr = str.split(' ');
    let result = '';
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === 'a' || arr[i] === 'for' || arr[i] === 'an' || arr[i] === 'and' ||
           arr[i] === 'by' || arr[i] === 'of')
        {
            continue;
        } else {
            let firstChar = arr[i].charAt(0).toUpperCase();
            result += firstChar;
        }
    }
    return result.trim();
}

console.log(buildAcronym("Search Engine Optimization"));
console.log(buildAcronym("Frequently Asked Questions"));
console.log(buildAcronym("By the way"));
console.log(buildAcronym("Federal Bureau of Investigation"));
console.log(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"));