//Date : September 9, 2026

/*
Given a word or sentence, return a corrected version where every word follows the "I before E except after C" rule.

If a word contains "ei" not preceded by "c", replace it with "ie".
If a word contains "ie" preceded by "c", replace it with "ei".
All other words are left unchanged.
*/

function iBeforeE(sentence) {
    let chars = sentence.split('');
    
    for (let i = 0; i < chars.length - 1; i++) {
        const pair = chars[i] + chars[i + 1];
        
        if (pair === 'ie' || pair === 'ei') {
            const prevChar = chars[i - 1];
            
            if (prevChar === 'c') {
                chars[i] = 'e';
                chars[i + 1] = 'i';
            } else {
                chars[i] = 'i';
                chars[i + 1] = 'e';
            }
        }
    }
    
    return chars.join('');
}
