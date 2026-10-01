//Date: October 1, 2026


/*
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.
*/


function checkStrength(password) {
    let upperCaseRegex = /[A-Z]/;
    let lowerCaseRegex = /[a-z]/;
    let numRegex = /[0-9]/;
    let spRegex = /[!@#$%^&*]/;

    let uCount = 0, lCount = 0, nCount = 0, sCount =0;

    for(let i =0;i<password.length;i++){
        if(password[i].match(upperCaseRegex)){
            uCount++;
        } else if(password[i].match(lowerCaseRegex)){
            lCount++;
        } else if(password[i].match(numRegex)){
            nCount++;
        } else if(password[i].match(spRegex)){
            sCount++;
        } else{}
    }

    //console.log(uCount, lCount, nCount, sCount);

    let arr = [];
    let rule1, rule2, rule3, rule4;
    if(password.length > 8){
        rule1 = true;
        arr.push(rule1);
    } else{
        rule1 = false;
    }

    if(uCount > 0 && lCount > 0){
        rule2 = true;
        arr.push(rule2);
    } else{
        rule2 = false;
    }

    if(nCount > 0){
        rule3 = true;
        arr.push(rule3);
    } else{
        rule3 = false;
    }

    if(sCount > 0){
        rule4 = true;
        arr.push(rule4);
    }else{
        rule4 = false;
    }
    //console.log(arr);

    if(arr.length >= 4){
        return 'strong';
    } else if(arr.length >=2){
        return 'medium';
    } else{
        return 'weak';
    }
}