//Date: September 27, 2026

/*
Given strings for a person's name, title, and company, return an email signature as a single string using the following rules:

The name should appear first, preceded by a prefix that depends on the first letter of the name. For names starting with (case-insensitive):
A-I: Use >> as the prefix.
J-R: Use -- as the prefix.
S-Z: Use :: as the prefix.
A comma and space (, ) should follow the name.
The title and company should follow the comma and space, separated by " at " (with spaces around it).
For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" return "--Quinn Waverly, Founder and CEO at TechCo".
*/

function generateSignature(name, title, company) {
    let result = ' ';

    let firstChar = name[0];
    firstChar = firstChar.toUpperCase();

    if(firstChar.charCodeAt(0) >= 65 && firstChar.charCodeAt(0) <= 73){
        result += '>>';
    } else if(firstChar.charCodeAt(0) >= 74 && firstChar.charCodeAt(0) <= 82){
        result += '--';
    } else if(firstChar.charCodeAt(0) >= 83 && firstChar.charCodeAt(0) <= 90){
        result += '::';
    }
    result = result.trim();

    return `${result}${name}, ${title} at ${company}`;
}

console.log(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"));