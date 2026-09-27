//Date: September 26, 2026

/*
A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

Order does not matter. Picking card A then card B is the same as picking card B then card A.
For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.
*/

function combinations(cards) {
    let n = 52n;
    cards = BigInt(cards);

    let nFact = getFact(n);
    let cardsFact = getFact(cards);
    let diff = getFact(n - cards);

    return Number(nFact / (cardsFact * diff));
}

const getFact = (num) => {
    let product = 1n;
    for(let i = 1n; i<=num;i++){
        product *= i;
    }
    return product;
}

console.log(combinations(2))