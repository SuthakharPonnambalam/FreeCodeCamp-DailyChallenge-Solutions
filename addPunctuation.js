//Date: September 19, 2026

/*
Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string
Return the resulting string.
*/

function addPunctuation(sentences) {
    let result = ' ';
    for(let i = 0; i < sentences.length;i++){
        if(sentences[i] === ' ' && (sentences.charCodeAt(i+1) >=65 && sentences.charCodeAt(i+1) <=90)){
            result = result + '. ';
        } else {
            result = result + sentences[i];
        }
    }
    return result.trim()+'.';
}

console.log(addPunctuation("Hello world"));
console.log(addPunctuation("Hello world It's nice today"));
console.log(addPunctuation("JavaScript is great Sometimes"));
console.log(addPunctuation("Wait.. For it"));
console.log(addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z"));