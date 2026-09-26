//Date: September 22, 2026

/*
Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.

The input string is in the format "WxH". For example, "800x600".
The scale is a number to multiply the width and height by.
Return the scaled dimensions in the same "WxH" format.
*/

function scaleImage(size, scale) {
    let arr = size.split('x');
    let width = Number(arr[0]);
    let height = Number(arr[1]);

    width = width * scale;
    height = height * scale;

    return `${width}x${height}`;
}

console.log(scaleImage("800x600", 2));