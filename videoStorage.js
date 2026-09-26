//Date: September 21, 2026

/*
Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
If not given one of the video units above, return "Invalid video unit".
The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
If not given one of the hard drive units above, return "Invalid drive unit".
Return the number of whole videos the drive can fit.
*/

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {

    if(videoUnit === 'TB'){
        return 'Invalid video unit';
    }
    if(driveUnit === 'B' || driveUnit === 'KB' || driveUnit === 'MB'){
        return 'Invalid drive unit';
    }
    let videoInBytes = getSize(videoSize, videoUnit);
    let driveSizeInBytes = getSize(driveSize, driveUnit);

    //console.log(videoInBytes, driveSizeInBytes)

    return Math.floor(driveSizeInBytes/videoInBytes);
}

const getSize = (size, unit) => {
    let fileSizeInBytes;
    switch(unit){
        case 'KB': 
            fileSizeInBytes =  size * 1000;
            break;
        case 'MB':
            fileSizeInBytes =  size * 1000000;
            break;
        case 'B': 
            fileSizeInBytes = size;
            break;
        case 'GB':
            fileSizeInBytes = size * 1000000000;
            break;
        case 'TB':
            fileSizeInBytes = size * 1000000000000;
            break;
    }
    return fileSizeInBytes;
}

console.log(numberOfVideos(500, "MB", 100, "GB"));
console.log(numberOfVideos(500000, "KB", 2, "TB"));
console.log(numberOfVideos(1, "TB", 10, "TB"));
console.log(numberOfVideos(2000, "MB", 100000, "MB"));
console.log(numberOfVideos(1.5, "GB", 2.2, "TB"));