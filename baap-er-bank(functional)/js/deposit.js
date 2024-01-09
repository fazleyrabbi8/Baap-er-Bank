
//1 get the deposit button and add event handler to it 


document.getElementById('btn-deposit').addEventListener('click', function () {

      // store  the input value as a variable 

      const newdeposit = getinputfieldvalue('New-Deposit');

      // store the old amount in a variable

      const oldDeposit = getinnertextbyid('Total-Deposit');

      //  calculate the total 

      const Totaldeposit = oldDeposit + newdeposit;

      // set the value to old deposit 

      settextelementvaluebYid('Total-Deposit' , Totaldeposit );

      //  get the old balance and then calculate and set  the new balance 


      const oldbalance = getinnertextbyid ('Total-balance') ;


      const newbalance = oldbalance + newdeposit ;
       
      settextelementvaluebYid ('Total-balance' , newbalance );


 











}

)