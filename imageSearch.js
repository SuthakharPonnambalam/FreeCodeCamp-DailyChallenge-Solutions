//Date: September 26, 2026

/*
On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

Ignore the case when matching the search terms.
Return the images in the same order they appear in the input array.
*/

function imageSearch(images, term) {
    term = term.toLowerCase();
    let arr = [];
    for(let i = 0; i < images.length;i++){
        if(images[i].toLowerCase().includes(term)){
            arr.push(images[i]);
        }
    }
    return arr;
}

console.log(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"));
console.log(imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"));