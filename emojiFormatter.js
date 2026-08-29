//Date: August 29, 2026
/*
Given a string of emojis, return the phrase using the following table:

👶	"baby"
🐱	"cat"
🐕	"dog"
🐟	"fish"
🥵	"hot"
🧊	"ice"
🪨	"rock"
🦈	"shark"
🍲	"soup"
⭐	"star"
Return the words separated by spaces.
*/

function getEmojiPhrase(str) {
   //console.log(Array.from(str).length);
   let resultString = '';
   const emojiArray = Array.from(str);
   for(let i = 0;i<emojiArray.length;i++){
    switch(emojiArray[i]){
            case '👶': resultString += 'baby ';break;
            case '🐱': resultString += 'cat ';break;
            case '🐕': resultString += 'dog ';break;
            case '🐟': resultString += 'fish ';break;
            case '🥵': resultString += 'hot ';break;
            case '🧊': resultString += 'ice ';break;
            case '🪨': resultString += 'rock ';break;
            case '🦈': resultString += 'shark ';break;
            case '🍲': resultString += 'soup ';break;
            case '⭐': resultString += 'star ';break;
        }
    }
    return resultString.trim();
}

console.log(getEmojiPhrase("🪨⭐"));