// functions

// write a function that'll take the input fields id and
//  will return the value as a number by converting the string to number using parseFloat 


function getinputfieldvalue(fieldid) {
    const inputfield = document.getElementById(fieldid);
    const inputamount = parseFloat(inputfield.value);

    inputfield.value = '';
    return inputamount;

};

//  write a function thatll take  a id and will return the innerText of the tag 

function getinnertextbyid(Elementid) {


    const storingtag = document.getElementById(Elementid);

    const storednumber = parseFloat(storingtag.innerHTML);
    return storednumber;
} ;


//   set value to a textfield ;
function settextelementvaluebYid(elementid, newvalue) {
    const element = document.getElementById(elementid);

    element.innerText = newvalue;

}

