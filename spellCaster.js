//Date: september 04, 2026

/*
Given a string of spell codes you are casting, calculate the total score.

Each character in the string represents a spell:

Code	Spell	Category	Base Score
"f"	Fire	Destruction	3
"l"	Lightning	Destruction	3
"i"	Ice	Control	2
"w"	Wind	Control	2
"h"	Heal	Restoration	1
"s"	Shield	Restoration	1
A combo multiplier is applied based on how many spells in a row have been cast from different categories:

The first spell always scores at base value.
Each consecutive spell from a different category than the previous increases the multiplier by 1.
Casting a spell from the same category as the previous resets the multiplier back to 1.
The score for each spell is its base score multiplied by the current multiplier.
Return the total score from the sequence of spells
*/


function cast(spells) {
    let spellsArr = spells.split('');
    let categoryArr = [];
    for(let i = 0; i < spellsArr.length; i++){
        let temp = getCategory(spellsArr[i]);
        categoryArr.push(temp);
    }
    //console.log(categoryArr);
    let total = 0, multiplier = 1;
    for(let j = 0; j < categoryArr.length; j++){
        let score = getScore(categoryArr[j]);
        if(j === 0){
            score = score * multiplier;
            total += score;
        }
        else {
            if(categoryArr[j] !== categoryArr[j-1]){
                multiplier += 1
                score = score * multiplier;
                total += score;
            } else{
                multiplier = 1;
                score = score * multiplier;
                total = total + score;
            }
        }
        //console.log(`${score}, ${multiplier}`);
    }
    return total;
}

const getCategory = (spell) => {
    switch(spell){
        case 'f':
        case 'l':
            return 'Destruction';
        case 'i':
        case 'w':
            return 'Control';
        case 'h':
        case 's':
            return 'Restoration';
    }
}

const getScore = (spell) => {
    switch(spell){
        case 'Destruction':
            return 3;
        case 'Control':
            return 2;
        case 'Restoration':
            return 1;
    }
}
console.log(cast("fihwl"));
console.log(cast("lwswfi"));
console.log(cast("sihwlih"));
console.log(cast("wishlfihwslwifihl"));

