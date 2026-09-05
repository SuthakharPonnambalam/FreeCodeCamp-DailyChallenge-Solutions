//Date: September 2, 2026

/*
DNA Mutations
Given two DNA strands of equal length, return an array of indexes where the strands differ (mutations).

DNA strands are strings made up of the characters "A", "T", "C", and "G"
Return the indexes in ascending order
If there are no mutations, return an empty array
*/

function detectMutations(strand1, strand2) {
    let mutationsArray = [];
    for(let i = 0; i < strand1.length; i++){
        if(strand1[i] !== strand2[i]){
            mutationsArray.push(i);
        }
    }
    mutationsArray = mutationsArray.sort((a,b) => a - b);
    return mutationsArray;
}

console.log(detectMutations("ATCG", "ATGG"));
console.log(detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC"));
console.log(detectMutations("TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG", "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG"));
console.log(detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG"));
