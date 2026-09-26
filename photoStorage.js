//Date: September 19, 2026

/*

Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

1 gigabyte equals 1000 megabytes.
Return the number of whole photos the drive can store.
*/

function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
    return (Math.floor((hardDriveSizeGb * 1000)/photoSizeMb));
}

console.log(numberOfPhotos(1, 1));
console.log(numberOfPhotos(4, 256));
console.log(numberOfPhotos(3.5, 750));