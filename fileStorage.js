//Date: September 20, 2026

/*
Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
Return the number of whole files the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.
*/

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
    let totalBytes = driveSizeGb * 1000000000;
    let fileSizeInBytes = 0
    switch(fileUnit){
        case 'KB': 
            fileSizeInBytes =  fileSize * 1000;
            break;
        case 'MB':
            fileSizeInBytes =  fileSize * 1000000;
            break;
        case 'B': 
            fileSizeInBytes = fileSize;
            break;
    }

    let filesCanBeStored = Math.floor(totalBytes/fileSizeInBytes);
    //console.log(filesCanBeStored);
    return filesCanBeStored;
}

console.log(numberOfFiles(500, "KB", 1));
console.log(numberOfFiles(50000, "B", 1));
console.log(numberOfFiles(4096, "B", 1.5));
console.log(numberOfFiles(5, "MB", 1));