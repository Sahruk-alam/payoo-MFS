
document.getElementById('login-button').addEventListener('click',
     function(e) {
        e.preventDefault();
    
        const number=3533254364
        const pin=1234
    const inputNumber=document.getElementById('number-label').value;
    const inputPin=document.getElementById('pin-label').value;
    const inputNumberConverted=parseInt(inputNumber);
    const inputPinConverted=parseInt(inputPin);
    console.log(inputNumberConverted,inputPinConverted);

    if(inputNumberConverted===number && inputPinConverted===pin){
       window.location.href='home.html';
    }
    else{
        alert('Login Failed');
    }
});