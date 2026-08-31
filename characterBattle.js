//Date: August 31, 2026

/*
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.
*/

const battleValue = {
    'a': 1, 
    'b': 2,
    'c': 3,
    'd': 4, 
    'e': 5,
    'f': 6,
    'g':7, 'h': 8, 'i':9, 'j':10, 
    'k':11, 'l':12, 'm':13, 'n':14,
    'o':15, 'p':16, 'q':17, 'r':18,
    's':19, 't':20, 'u':21, 'v':22,
    'w':23, 'x':24, 'y':25, 'z':26,
    'A':27, 'B':28, 'C':29, 'D':30,
    'E':31, 'F':32, 'G':33, 'H':34,
    'I':35, 'J':36, 'K':37, 'L':38,
    'M':39, 'N':40, '0':41, 'P':42,
    'Q':43, 'R':44, 'S':45, 'T':46,
    'U':47, 'V':48, 'W':49, 'X':50,
    'Y':51, 'Z':52,
    0: 0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9
}

function battle(myArmy, opposingArmy) {
    let myArmyWin = 0;
    let opposongArmyWin = 0;
    let str1Length = myArmy.length;
    let str2Length = opposingArmy.length;
    if(str1Length > str2Length){
        return "Opponent retreated";
    } else if(str2Length > str1Length){
        return "We retreated";
    } else {
        for(let i=0;i<myArmy.length;i++){
            let valueOne = getValue(myArmy[i]);
            let valueTwo = getValue(opposingArmy[i]);
            //console.log(valueOne, valueTwo);
            if(valueOne > valueTwo){
                myArmyWin++;
            }
            else if(valueTwo > valueOne){
                opposongArmyWin++;
            }
            else{}
        }
    }
    if(myArmyWin > opposongArmyWin){
        return "We won";
    } else if(opposongArmyWin > myArmyWin){
        return "We lost";
    } else {
        return "It was a tie";
    }
}

function getValue(char){
    if(Object.hasOwn(battleValue, char)){
        return battleValue[char];
    }
    return 0;
}
console.log(battle("Hello", "World"));
console.log(battle("pizza", "salad"));
console.log(battle("C@T5", "D0G$"));
console.log(battle("kn!ght", "orc"));
console.log(battle("PC", "Mac"));
console.log(battle("Wizards", "Dragons"));
console.log(battle("Mr. Smith", "Dr. Jones"));

