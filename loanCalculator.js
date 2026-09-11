//Date: September 1, 2026
/*
Given a loan amount, annual interest rate percentage, and fixed monthly payment, return an array of remaining balances after each monthly payment until the loan is paid off.

Each month, interest is calculated on the remaining balance using the monthly interest rate: (annual rate / 100) / 12, then the monthly payment is subtracted.
Return each remaining balance rounded to the nearest dollar.
Include the loan amount in the returned array. The first element in the array will always be the loan amount, and the last element of the array will always be 0.
*/


function getLoanSchedule(loanAmount, annualRate, monthlyPayment) {
    let loanArray = [loanAmount];
    while(loanAmount >= 0){
        let monthlyInterest = Number((loanAmount * ((annualRate/100)/12)).toFixed(2));
        let balance = (loanAmount + monthlyInterest - monthlyPayment);
        //console.log(Math.round(balance))
        if(balance>0){
            loanArray.push(Math.round(balance));
        }
        loanAmount = balance;
    }
    loanArray.push(0);

    return loanArray;
}

console.log(getLoanSchedule(1000, 0, 200));
console.log(getLoanSchedule(1000, 5, 200));
console.log(getLoanSchedule(10, 50, 1));
