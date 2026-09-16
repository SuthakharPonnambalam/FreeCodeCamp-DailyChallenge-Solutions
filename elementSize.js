//Date: September 16, 2026

/*
Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.

The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.

"vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.

"vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.
*/

function getElementSize(windowSize, elementVw, elementVh) {
    let arr = windowSize.split('x');
    let width = Number(arr[0]);
    let height = Number(arr[1]);

    let viweWidth = Number(elementVw.slice(0,elementVw.indexOf('v')));
    let viewHeight = Number(elementVh.slice(0,elementVh.indexOf('v')));

    let wRatio = width * (viweWidth/100);
    let hRatio = height * (viewHeight/100);
    //console.log(wRatio, hRatio);
    return `${wRatio} x ${hRatio}`;
}

console.log(getElementSize("1200 x 800", "50vw", "50vh"));
console.log(getElementSize("320 x 480", "25vw", "50vh"));
console.log(getElementSize("1000 x 500", "7vw", "3vh"));
console.log(getElementSize("1920 x 1080", "95vw", "100vh"));
console.log(getElementSize("1200 x 800", "0vw", "0vh"));
console.log(getElementSize("1440 x 900", "100vw", "114vh"));