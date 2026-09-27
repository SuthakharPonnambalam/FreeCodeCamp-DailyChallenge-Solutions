//Date: September 26, 2026

/*

Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.
*/

function getExtension(filename) {
    if(filename.includes('.')){
        let arr = filename.split('.');
        if(arr[arr.length-1] === ''){
            return 'none';
        }
        return arr[arr.length-1];
    } else{
        return 'none';
    }
}

//console.log(getExtension("document.txt"));
console.log(getExtension("archive.tar.gz"));
console.log(getExtension("final.draft."));