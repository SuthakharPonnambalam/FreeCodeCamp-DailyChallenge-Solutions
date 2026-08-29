//Date: August 28, 2026
/*
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.
*/


function decode(message, shift) {
    let resultString = '';
  for(let i = 0; i < message.length;i++){
    let charCode = message.charCodeAt(i);
    //console.log(`At start:`+charCode);
    let newCharCode, newChar;
    if(charCode >=65 && charCode <=90){
        newCharCode = charCode - shift;
        //console.log(newCharCode);
        if(newCharCode > 90){
            newCharCode = newCharCode - 26;
        } else if(newCharCode < 65){
            newCharCode = newCharCode + 26;
        } else {}
        newChar = String.fromCharCode(newCharCode);
        resultString = resultString + newChar;
    } else if(charCode >= 97 && charCode <= 122){
        newCharCode = charCode - shift;
        //console.log(newCharCode);
        if(newCharCode > 122){
            newCharCode = newCharCode - 26;
        } else if(newCharCode < 97){
            newCharCode = newCharCode + 26;
        } else {}
        newChar = String.fromCharCode(newCharCode);
        resultString = resultString + newChar;
    }
    else {
        resultString = resultString + message[i];
    }
  }
  return resultString;
}