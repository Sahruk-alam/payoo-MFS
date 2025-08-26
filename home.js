
// id function use
function getInputValue(id){
return parseInt(document.getElementById(id).value);
}
function getinput(id){
    return document.getElementById(id).value;
}
function getInnertext(id){
    return parseInt(document.getElementById(id).innerText);
}
// set inner text 
function setInnertext(value){
   return document.getElementById('main-balance').innerText = value;

}
// transaction
const transactionData = [];
// big button function 

function bigButton(id){
     const forms=document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display='none';
    }
    document.getElementById(id).style.display = 'block';
}
// toggle button 
function handleButton(id){
     const formbtn=document.getElementsByClassName('form-btn');
     for(const btn of formbtn){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        btn.classList.add('border-gray-300');
     }
     document.getElementById(id).classList.remove
     ('border-gray-300');
     document.getElementById(id).classList.add
     ('border-[#0874f2]', 'bg-[#0874f20d]');
}

// add money
document.getElementById('add-money').addEventListener('click',
     function(e) {
        e.preventDefault();
        const bank = getinput('bank-select');
        const accountNumber = getinput('account-number');
        const addAmount = getInputValue('add-amount');
        const pinNumber = getinput('pin-number');
        if(accountNumber.length<11){
            alert("Please valid account number.");
            return;
        }
        if(pinNumber.length!==4){
            alert("Please enter a valid 4-digit pin number.");
            return;
        }
        const mainBalance=getInnertext('main-balance');

            console.log(mainBalance);
            const totalBalance = mainBalance + addAmount;
           setInnertext(totalBalance);
           
           const data={
            name:'Add Money',
            date: new Date().toLocaleString(),
           }
           transactionData.push(data);
           console.log(transactionData);
});
// withdraw money
document.getElementById('withdraw-btn').addEventListener('click',
    function(){
        const withdrawAmount=getInputValue('withdraw-amount');
    const mainBal=getInnertext('main-balance');
const agent=getinput('agent-number');
     const pinNum=getinput('pin-number-withdraw');
    console.log(withdrawAmount, mainBal);
    if(agent.length<11){
        alert("Please valid agent number.");
        return;
    }
    if(pinNum.length!==4){
        alert("Please enter a valid 4-digit pin number.");
        return;
    }
    if(withdrawAmount>mainBal){
        alert('Insufficient Balance');
        return;
    }
    const totalBal=mainBal-withdrawAmount
    setInnertext(totalBal);
    const data={
            name:'Cash Out',
            date: new Date().toLocaleString(),
           }
           transactionData.push(data);
              console.log(transactionData);
    })
// transfer money 
document.getElementById('transfer-btn').addEventListener('click',function(){
const transferAccount=getinput('transfer-account');
const transferAmount=getInputValue('transfer-amount');
const transferPin= getinput('transfer-pin');
const mainBal=getInnertext('main-balance');

if(transferAccount.length<11){
    alert("Please enter a valid 11-digit account number."); 
    return; 
}
if(transferPin.length!==4){
    alert("Please enter a valid 4-digit pin number.");
    return;
}
if(transferAmount>mainBal){
    alert('Insufficient Balance');
    return;
}
const realAmount=mainBal-transferAmount;
setInnertext(realAmount);

const data={
            name:'Transfer Money',
            date: new Date().toLocaleString(),
           }
           transactionData.push(data);
           console.log(transactionData);
})

    // big button
document.getElementById('add-button').addEventListener('click',
    function(){
     bigButton('add-money-section');
     handleButton('add-button');
}) 
document.getElementById('cash-button').addEventListener('click',
    function(){  
    bigButton('cash-out-section');
   handleButton('cash-button');
})
document.getElementById('transfer-button').addEventListener('click',
    function(){
        bigButton('transfer-section');
     handleButton('transfer-button');
    })
document.getElementById('bonus-button').addEventListener('click',
   function(){
       bigButton('bonus-section');
    handleButton('bonus-button');
   })
   document.getElementById('pay-bill-button').addEventListener('click',
   function(){
       bigButton('pay-bill-section');
       handleButton('pay-bill-button');
   })
   document.getElementById('transaction-button').addEventListener('click',
   function(){
       bigButton('transaction-section');
    handleButton('transaction-button');
   })