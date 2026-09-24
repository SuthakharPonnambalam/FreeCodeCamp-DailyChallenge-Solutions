//Date: September 23, 2026

/*
Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_).
*/

function toSnake(camel) {
    let result = ' ';
    for(let i = 0; i <camel.length;i++){
        if(camel.charCodeAt(i) >=65 && camel.charCodeAt(i) <=90){
            result = result + '_' + camel[i].toLowerCase()
        } else {
            result += camel[i];
        }
    } 
    return result;
}

console.log(toSnake("helloWorld"));