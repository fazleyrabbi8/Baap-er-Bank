// step-1: add event listener to the withdraw button

// 1. add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {

    // 2. get the withdraw amount from the withdraw input field

    const withdrawfield = document.getElementById('New-Withdraw-Amount');

    // 2-5. also make sure to convert the input into a number by using parseFloat
    const newwithdrawamount = parseFloat(withdrawfield.value);


    // 3. Get previous withdraw total


    const oldwithdraw = document.getElementById('Total-Withdraw');
    const oldwithdrawamount = parseFloat(oldwithdraw.innerText);

    // 4. calculate total withdraw amount 
    // 4-5. set total withdraw amount
    const totalWithdrawAmount = newwithdrawamount + oldwithdrawamount;
    oldwithdraw.innerText = totalWithdrawAmount;

    // 5. get the previous balance total
    const totalbalance = document.getElementById('Total-balance');
    const totalBalanceamount = parseFloat(totalbalance.innerText);

    // 6. calculate new balance total
    const Newbalance = totalBalanceamount - newwithdrawamount;

    // 6-5: set the new balance total
    totalbalance.innerText = Newbalance;






    // 7. clear the input field

    withdrawfield.value = '';



}) 