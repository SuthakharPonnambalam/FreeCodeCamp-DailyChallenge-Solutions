//Date: September 26, 2026

/*
Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):

"fw:"
"fwd:"
"re:"
Return the total number of occurrences of these markers.
*/

function emailChainCount(subject) {
    subject = subject.toLowerCase();
    let count = 0;
    let arr = subject.split(':');
    for(let i = 0; i < arr.length;i++){
        let temp = arr[i].trim();
        if(temp === 're' || temp === 'fwd' || temp === 'fw'){
            count++;
        }
    }
    return count;
}

console.log(emailChainCount("Re: re: RE: rE: Meeting Notes"));
console.log(emailChainCount("Re: Meeting Notes"));
console.log(emailChainCount("Meeting Notes"));
console.log(emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary"));
console.log(emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes"));