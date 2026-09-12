//Date: September 11, 2026
 
/*Given a full name as a string, return their initials.

Names to initialize are separated by a space.
Initials should be made uppercase.
Initials should be separated by dots.
For example, "Tommy Millwood" returns "T.M.".
*/

function getInitials(name) {
    let arr = name.split(' ');
    let result = " ";
    for(let i = 0; i < arr.length;i++){
        result = result + arr[i].charAt(0).toUpperCase() + '.';
    }
    return result.trim();
}

console.log(getInitials("Tommy Millwood"));