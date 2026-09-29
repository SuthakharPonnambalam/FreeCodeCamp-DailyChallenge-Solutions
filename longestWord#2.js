//Date: September 28, 2026

/*
Given a sentence, return the longest word in the sentence.

Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.
*/

function getLongestWord(sentence) {
    let arr = sentence.split(' ');
    let lengths = [];

    for(let i = 0; i < arr.length;i++){
        let len = getLen(arr[i]);
        lengths.push(len);
    }

    let max = 0;
    let pos = 0;
    for(let i = 0 ; i < lengths.length;i++){
        if(lengths[i] > max){
            max = lengths[i];
            pos = i;
        }
    }

    let result = arr[pos];
    if(result.includes('.')){
        let dotPos = result.indexOf('.');
        result = result.slice(0, dotPos);
        return result;
    }
    return result;
}

const getLen = (word) => {
    let regex = /[a-zA-Z]/;
    let res = '';
    for(let i = 0; i < word.length; i++){
        if(word[i].match(regex)){
            res+=word[i];
        }else{continue;}
    }
    return word.length;
}

console.log(getLongestWord("coding is fun"));
console.log(getLongestWord("Coding challenges are fun and educational."));
