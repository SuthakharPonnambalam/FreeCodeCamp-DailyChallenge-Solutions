//Date: September 3, 2026
/*
Given a secret number and a guess, determine if the guess is correct.

Return:

"higher" if the secret number is higher than the guess.
"lower" if the secret number is lower than the guess.
"you got it!" if the guess is correct.

*/

function guessNumber(secret, guess) {
    if(guess > secret){
        return 'lower';
    } else if (guess < secret){
        return 'higher';
    } 
    return 'you got it!';
}

console.log(guessNumber(50, 30));