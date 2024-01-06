// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //  step-2: get the new deposit amount from input field and convert the string into number using parsefloat 

    const newdepositamount = document.getElementById('New-Deposit');
    const newamount = parseFloat(newdepositamount.value);

    //  step-3: get the old deposit amount from input field and convert the string into number using parsefloat 
    const oldDeposit = document.getElementById('Total-Deposit');
    const oldamount = parseFloat(oldDeposit.innerText);


    //  step-4: add the new and old existing value and return them as a new value  ;

    const newtotal = newamount + oldamount;
    oldDeposit.innerText = newtotal;
    //   step -5: Calculate the new balance and return .


    const currentBalance = document.getElementById('Total-balance');
    const Oldbalance = parseFloat(currentBalance.innerText) ;

     const newbalance = Oldbalance + newamount ;

     currentBalance.innerText = newbalance ;



    newdepositamount.value =  '';
})