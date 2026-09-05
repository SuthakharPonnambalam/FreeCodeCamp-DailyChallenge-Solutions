//Date: September 1, 2026

/*Given a sentence, convert any British English spellings to their American English equivalents using the following lookup table and return the updated sentence:

British	American
"colour"	"color"
"flavour"	"flavor"
"honour"	"honor"
"neighbour"	"neighbor"
"labour"	"labor"
"humour"	"humor"
"centre"	"center"
"fibre"	"fiber"
"defence"	"defense"
"offence"	"offense"
"organise"	"organize"
"recognise"	"recognize"
"analyse"	"analyze"
*/


let dict = {
    "colour": "color",
    "flavour": "flavor",
    "honour": "honor",
    "neighbour": "neighbor",
    "labour": "labor",
    "humour": "humor",
    "centre": "center",
    "fibre": "fiber",
    "defence": "defense",
    "offence": "offense",
    "organise": "organize",
    "recognise": "recognize",
    "analyse": "analyze",
}

function britishToAmerican(sentence) {
    sentence = sentence.slice(0,sentence.length-1);
    let strArray = sentence.split(' ');
    let result = '';

for (let i = 0; i < strArray.length; i++) {
    let word = strArray[i];
    for (let key of Object.keys(dict)) {
        if (word.includes(key)) {
            let pos = word.indexOf(key);
            let length = key.length;
            
            word = word.slice(0, pos) + dict[key] + word.slice(pos + length);
            break;
        }
    }
    result += word + ' ';
}
result = result.trim();
return result.trim()+'.';
}

console.log(britishToAmerican("I love the colour of this centre."));