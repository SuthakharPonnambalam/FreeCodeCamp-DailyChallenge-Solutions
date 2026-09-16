//Date: September 16, 2026

/*
Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).
*/

function capitalize(paragraph) {

    paragraph = paragraph.toLowerCase();
    const regex = /[.?!]+/;
    let result = ' ';
    let i = 0;

    while(i < paragraph.length){
        if(paragraph[i].match(regex)){
            result += paragraph[i];
            let isChar = false;
            i++;

            while(isChar === false && i < paragraph.length){
                if(paragraph.charCodeAt(i) >= 97 && paragraph.charCodeAt(i) <= 122){
                    result += paragraph[i].toUpperCase();
                    isChar = true;
                } else {
                    result += paragraph[i];
                    i++;
                }
            }

        }
        else {
            result = result + paragraph[i];
        }
        i++;
    }
    result = result.trim();
    //console.log(result);
    return result.charAt(0).toUpperCase() + result.slice(1);

}

console.log(capitalize("hello world. how are you?"));
console.log(capitalize("this is a simple sentence."));
console.log(capitalize("i did today's coding challenge... it was fun!!"));