//Date: August 31, 2026

/*Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
*/

function areAnagrams(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }
    let string1 = str1.toLowerCase();
    let string2 = str2.toLowerCase();
    let mapOne = getCharCount(string1);
    let mapTwo = getCharCount(string2);
    //console.log(mapOne);
    let count = 0;
    for (const [key, value] of mapOne) {
        if(mapTwo.has(key)){
            if(mapOne.get(key) === mapTwo.get(key)){
                count  = count + mapOne.get(key);
            }
        }
    }
    //console.log(count);
    if(count === str1.length){
        return true;
    }
    return false;
}

const getCharCount = (str) =>{
    let map = new Map();
    for(let i=0; i<str.length;i++){
        if(map.has(str[i])){
            let val = map.get(str[i]);
            val = val + 1;
            map.set(str[i], val);
        } else {
            map.set(str[i], 1);
        }
    }
    return map;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("School master", "The classroom"));
console.log(areAnagrams("A gentleman", "Elegant man"));
console.log(areAnagrams("Hello", "World"));
console.log(areAnagrams("apple", "banana"));
console.log(areAnagrams("cat", "dog"));