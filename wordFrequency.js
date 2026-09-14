//Date: September 14, 2026

/*
Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first.
*/

function getWords(paragraph) {
    let map = new Map();
    let newParagraph = paragraph.toLowerCase();
    let arr = newParagraph.split(' ');
    for(let i =0;i<arr.length;i++){
        if(arr[i].includes('.') || arr[i].includes(',') || arr[i].includes('!')){
            arr[i] = arr[i].replace(/[.,!]/g, "");
        }
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1);
        } else{
            map.set(arr[i], 1);
        }
    }
    const sortedByValue = new Map([...map.entries()].sort((a, b) => {
        return b[1] - a[1]; 
    }));

    let count = 0;
    let resultArr = [];
    for(const [key,value] of sortedByValue){
        if(count === 3){
            return resultArr;
        } else{
            resultArr.push(key);
            count = count + 1;
        }
    }
    return (resultArr);
}

console.log(getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"));
console.log(getWords("I like coding. I like testing. I love debugging!"));
console.log(getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"));
