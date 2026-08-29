//Date: August 28, 2026
/*
Given a string of a person's first and last name, calculate their lucky number using the following rules:

First and last names are separated by a space
Find the vowel and consonant count for each name
Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
Do the same for the two larger counts and the larger name
Subtract the smaller value from the larger one to get their lucky number
If the final value is zero (0), return 13.
*/


function getLuckyNumber(name) {
    let fName = name.split(' ')[0];
    let lName = name.split(' ')[1];

    //Get str1 numbers
    const str1 = getCount(fName);
    const [str1vCount, str1cCount, ...others] = str1;
    //console.log(str1vCount, str1cCount);

    //Get str2 numbers
    const str2 = getCount(lName);
    const [str2vCount, str2cCount, ...others2] = str2;
    //console.log(str2vCount, str2cCount);

    //Get str1 and str2 lengths
    const str1Length = fName.length;
    const str2Length = lName.length;

    //Find smallVowel and smallConsonant
    let smallVC, smallCC, bigVC, bigCC;
    if(str1vCount <= str2vCount){
        smallVC = str1vCount;
        bigVC = str2vCount;
    } else {
        smallVC = str2vCount;
        bigVC = str1vCount;
    }
    //console.log(smallVC, bigVC);

    if(str1cCount <= str2cCount){
        smallCC = str1cCount;
        bigCC = str2cCount;
    } else {
        smallCC = str2cCount;
        bigCC = str1cCount;
    }
    //console.log(smallCC, bigCC);
    
    //find small name
    let smallName, bigName;
    if(str1Length <= str2Length){
        smallName = str1Length;
        bigName = str2Length;
    } else {
        smallName = str2Length;
        bigName = str1Length;
    }
    //console.log(smallName, bigName);

    let result1 = smallVC * smallCC * smallName;
    let result2 = bigVC * bigCC * bigName;
    //console.log(result1, result2);
    let finalNumber = result2 - result1;
    //console.log(finalNumber);
    if(finalNumber === 0){
        return 13;
    } else {
        return finalNumber;
    }
  
}
const getCount = (str) => {
    let vowelCount = 0, consonantCount = 0;
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ){
            vowelCount += 1;
        }
        else {
            consonantCount += 1;
        }
    }
    let result = [];
    result.push(vowelCount, consonantCount);
    return result
}