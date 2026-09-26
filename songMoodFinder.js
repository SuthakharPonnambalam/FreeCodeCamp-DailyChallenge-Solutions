//Date: September 3, 2026

/*
Given a genre string and a BPM number for a song, determine the mood using the following table:

Mood	Genre	BPM Range
"focus"	"classical"	60–109
"focus"	"electronic"	60–89
"happy"	"pop"	60–180
"happy"	"classical"	110–180
"happy"	"rock"	60–129
"happy"	"electronic"	90–134
"hype"	"rock"	130–180
"hype"	"electronic"	135–180
*/

function getMood(genre, bpm) {
    let result;
    switch(genre){
        case 'rock':
            if(bpm >=60 && bpm <=129){
                result = 'happy';
            } else if(bpm >=130 && bpm <= 180){
                result = 'hype';
            } else{}
            break;
        case 'classical':
            if(bpm >=60 && bpm <=109){
                result = 'focus';
            } else if(bpm >=110 && bpm <= 180){
                result = 'happy';
            } else{}
            break;
        case 'electronic':
            if(bpm >= 60 && bpm <= 89){
                result = 'focus';
            } else if(bpm >=90 && bpm <=134){
                result = 'happy';
            } else if(bpm >= 135 && bpm <= 180){
                result = 'hype';
            } else {}
            break;
        case 'pop':
            if(bpm >= 60 && bpm <= 180){
                result = 'happy';
            }
    }
    return result;
}

console.log(getMood("rock", 111));
console.log(getMood("electronic", 74));