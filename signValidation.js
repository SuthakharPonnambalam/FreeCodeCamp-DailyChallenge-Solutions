//Date: September 28, 2026

const alphabetMap = new Map();

for (let i = 0; i < 26; i++) {
    alphabetMap.set(String.fromCharCode(97 + i), i + 1);       // a-z
    alphabetMap.set(String.fromCharCode(65 + i), i + 27);      // A-Z
}
//console.log(alphabetMap);

function verify(message, key, signature) {
    let messageValue = getValue(message);
    let keyValue = getValue(key);

    if(messageValue + keyValue === signature){
        return true;
    }
    return false;
}


const getValue = (word) => {
    let sum = 0;

    for(let j = 0; j < word.length;j++){
        if(alphabetMap.has(word[j])){
            sum += alphabetMap.get(word[j]);
        }
    }
    return sum;
}

console.log(verify("foo", "bar", 57));