//Date: September 15, 2026

/*
Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.

A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.

Check rotation 0 (the given number) first.
Given numbers won't contain any zeros.
Return the first rotation number if one is found, or "none" if not.
*/

function getRotation(n) {
    let length = String(n).length;
    let copyNum = n;
    let count = 0;
    let temp = n;
    if(copyNum % length === 0){
        return 0;
    } else {
        while(count !== length){
            temp = rotateNum(temp);
            //console.log(temp);
            if(temp % length === 0){
                count = count + 1;
                break;
            } else {
                count = count + 1;
            }
        }
    }
    if(count > 0 && count !== length){
        return count;
    } 
    return 'none';
}

const rotateNum = (n) => {
    let str = String(n);
    let arr = str.split('');
    return arr.slice(1).join('') + arr.slice(0,1).join();

}

console.log(getRotation(13579));
console.log(getRotation(123));
console.log(getRotation(24681));
console.log(getRotation(84138789345));

