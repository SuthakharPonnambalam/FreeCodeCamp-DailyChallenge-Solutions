//Date: September 28, 2026

/*
Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

Only count rectangles with integer width and height.
For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.
*/

function countRectangles(width, height) {
    let horizontalSpans = getSpans(width);
    let verticalSpans = getSpans(height);

    return horizontalSpans * verticalSpans;
}

const getSpans = (num) => {
    let sum = 0;
    for(let i = 0; i<=num; i++){
        sum += i;
    }
    return sum;
}

console.log(countRectangles(1, 3));