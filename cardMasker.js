//Date: October 2, 2026

/*
Given a string of credit card numbers, return a masked version of it using the following constraints:

The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
Replace all numbers, except the last four, with an asterisk (*).
Leave the remaining characters unchanged.
For example, given "4012-8888-8888-1881" return "****-****-****-1881".
*/

function mask(card) {
    let res = '';
    let regex = /[\s*-]/
    for(let i = 0; i < card.length;i++){
        if(i >= 15){
            res+= card[i];
        } else{
            if(card[i].match(regex)){
                res = res + card[i];
            }else{
                res+= '*';
            }
            
        }
    }
    return res;
}

console.log(mask("4012-8888-8888-1881"))