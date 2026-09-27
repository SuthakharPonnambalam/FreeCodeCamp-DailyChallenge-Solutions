//Date: September 27, 2026

/*
Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.
*/

function isMatch(fingerprintA, fingerprintB) {
    if(fingerprintA.length !== fingerprintB.length){
        return false;
    } else {
        let diffCount = 0;
        for(let i = 0; i < fingerprintA.length;i++){
            if(fingerprintA[i] !== fingerprintB[i]){
                diffCount++;
            }
        }

        let thresholdLength = fingerprintA.length * 0.10;
        if(diffCount > thresholdLength){
            return false;
        }
        return true;
    }
}

console.log(isMatch("helloworld", "helloworlds"));
console.log(isMatch("helloworld", "helloworld"));
console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"));