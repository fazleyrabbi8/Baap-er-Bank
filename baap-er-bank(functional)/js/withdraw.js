//  get the withdraw button and add event handler 

// 2   get new withdraw amount by using getinputfieldvalue  function 
// 3  get the old withdraw total by using getinnertextby id function +

//  calculate  total withdraw amount ,
//   set the total withdraw amount by settextelementvaluebyid function .

//  get the old balance , 
//  calculate the new balance , set the new balance .


 document.getElementById('btn-withdraw').addEventListener('click' ,function(){


     const newwithdraw = getinputfieldvalue('New-Withdraw-Amount') ;

      const Oldwithdraw = getinnertextbyid('Total-Withdraw') ;
       const totalwithdraw = newwithdraw + Oldwithdraw ;

        settextelementvaluebYid('Total-Withdraw' , totalwithdraw  ) ;
  
        const oldbalance =  getinnertextbyid ('Total-balance') ;

         const newbalance = oldbalance -newwithdraw ;
         settextelementvaluebYid( 'Total-balance' , newbalance ) ;





 })