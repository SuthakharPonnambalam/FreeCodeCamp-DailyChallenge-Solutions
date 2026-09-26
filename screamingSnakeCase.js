//Date: September 25, 2026

/*
Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.

The given variable names will be written in one of the following formats:

camelCase
PascalCase
snake_case
kebab-case
In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.

To convert to SCREAMING_SNAKE_CASE:

Make all letters uppercase
Separate words with an underscore (_)
*/

function toScreamingSnakeCase(variableName) {
    let result = ' ';

    for(let i = 0; i < variableName.length;i++){
        if(variableName.charCodeAt(i) >= 97 && variableName.charCodeAt([i]) <= 122){
            result += variableName[i];
        } else if((variableName.charCodeAt([i]) >= 65 && variableName.charCodeAt([i]) <=90)){
            if( i=== 0){
                result = result +variableName[i];
            } else {
                result = result + '_' +variableName[i];
            }
        } else {
            result += '_';
        }
    }
    result = result.toUpperCase().trim();
    return result;
}

console.log(toScreamingSnakeCase("userEmail"));
console.log(toScreamingSnakeCase("UserPassword"));
console.log(toScreamingSnakeCase("user_id"));
console.log(toScreamingSnakeCase("user-address"));
console.log(toScreamingSnakeCase("username"));
console.log(toScreamingSnakeCase("my_variable_name"));