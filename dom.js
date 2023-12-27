+ // add click event handler 
document.getElementById('btn-submit').addEventListener('click' ,function(){
// get the email and password input from the input field 

const email = document.getElementById('Email-box').value  ;
const password = document.getElementById('Password-box').value  ;
if (email === 'baperbeta@gmail.com' && password === 'baperbeda') {
    console.log('Valid User')
    
} else {

    console.log('Invalid User')
    
}
})