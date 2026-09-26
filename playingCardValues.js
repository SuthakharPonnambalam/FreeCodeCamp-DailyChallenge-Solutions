//Date: September 15, 2026

/*
Given an array of playing cards, return a new array with the numeric value of each card.

Card Values:

An Ace ("A") has a value of 1.
Numbered cards ("2" - "10") have their face value: 2 - 10, respectively.
Face cards: Jack ("J"), Queen ("Q"), and King ("K") are each worth 10.
Suits:

Each card has a suit: Spades ("S"), Clubs ("C"), Diamonds ("D"), or Hearts ("H").
Card Format:

Each card is represented as a string: "valueSuit". For Example: "AS" is the Ace of Spades, "10H" is the Ten of Hearts, and "QC" is the Queen of Clubs.
*/

function cardValues(cards) {
    let result = [];
    for(let i = 0; i < cards.length;i++){
        let value = getValue(cards[i]);
        result.push(value);
    }
    return result;
}

const regex = /[0-9]/;

const getValue = (card) => {
    if(card.match(regex)){
        let temp = card[0];
        if(temp === '1'){
            return 10;
        } else {
            return Number(temp);
        }
    } else if(card.includes('A')){
        return 1;
    } else if(card.includes('K') || card.includes('Q') || card.includes('J')){
        return 10;
    }
}

console.log(cardValues(["AH", "4D", "2S"]));