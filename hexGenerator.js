//Date: August 31, 2026

/*
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.

Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"
*/

function generateHex(color) {
    let result = '';
    let red, green, blue;
    switch(color){
        case "red":
            red = "FF";
            green = getCode();
            blue = getCode();
            result = red + green + blue;
            break;
        case "green":
            red = getCode();
            green = "FF";
            blue = getCode();
            result = red + green + blue;
            break;
        case "blue":
            red = getCode();
            green = getCode();
            blue = "FF";
            result = red + green + blue;
            break;
        default:
            result = "Invalid color";
    }
    return result;
}

function getCode(){
   let hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let f1 = Math.floor(Math.random() * 15);
    let f2 = Math.floor(Math.random() * 15);
    let result = hexArray[f1] + hexArray[f2];
    return (result);
}


console.log(generateHex("red"));
console.log(generateHex("green"));
console.log(generateHex("blue"));
console.log(generateHex("yellow"));
