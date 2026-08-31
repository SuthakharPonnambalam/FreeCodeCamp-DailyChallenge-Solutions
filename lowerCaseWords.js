//Date: August 31, 2026

/*
Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.
*/

function getLowercaseWords(str) {
    let arr = str.split(' ');
    let resultArray = [];
    for(let i = 0; i < arr.length;i++){
        let word = arr[i];
        let length = word.length;
        let count = 0;
        for(let j = 0;j < word.length;j++){
            const code = word.charCodeAt(j);
            if(code >= 97 && code <= 122){
                count++;
            } else {
                break;
            }
        }
        if(count === length){
            resultArray.push(word);
        }
    }
    //console.log(resultArray);
    let resultString = resultArray.join(' ');
    return (resultString);
}

console.log(getLowercaseWords("hello GOOD world"));
console.log(getLowercaseWords("these are all lowercase"));
console.log(getLowercaseWords("less is NoT more"));
console.log(getLowercaseWords("DonT eat pizza every OTHER day"));
console.log(getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog"));