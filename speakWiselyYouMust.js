//Date: October 2, 2026

/*
Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

Words are separated by a single space.
Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
Move all words before and including that word to the end of the sentence and:
Preserve the order of the words when you move them.
Make them all lowercase.
And add a comma and space before them.
Capitalize the first letter of the new first word of the sentence.
All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.
For example, given "You must speak wisely." return "Speak wisely, you must."
*/


function wiseSpeak(sentence) {
    let regex = /(have|must|can|are|will)/;
    let lastchar = sentence[sentence.length-1];
    let part1 = [];
    let part2 = []
    let arr = sentence.split(' ');
    for(let i = 0; i < arr.length;i++){
        if(arr[i].match(regex)){
            part1 = arr.slice(i+1);
            part2 = arr.slice(0, i+1);
        }
    }
    let res = [...part1, ...part2];
    let resultString = res.join(' ').toLowerCase();
    //console.log(resultString);

    resultString = resultString.replace(/[.?!]/, ',');
    return resultString.slice(0, 1).toUpperCase() + resultString.slice(1) + lastchar;
}

console.log(wiseSpeak("You must speak wisely?"));
console.log(wiseSpeak("You can do it!"));
console.log(wiseSpeak("All your base are belong to us."));