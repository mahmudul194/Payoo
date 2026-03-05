// used a machine for repetative codes
const cashoutBtn = document.getElementById('cashout-btn')
cashoutBtn.addEventListener('click',()=>{
  const agentNumber = getvaluefromInput('cashout-agent');
  const pinNumber = getvaluefromInput('cashout-pin');
  const amount = getvaluefromInput('cashout-amount')
  const CurrentAmount = Number(amount);
  // const balance = document.getElementById('balance')
  // const currentBalance = Number(balance.innerText);
  const currentBalance = getBalance();
  const NewBalance = currentBalance - CurrentAmount;

  if(NewBalance < 0){
    alert('invalid amount')
    return;
  }
  if(agentNumber.length === 11 && pinNumber === '9762'){
    if(CurrentAmount > 50000){
      alert('Cashout Limit for a day is 50000 not more then that.')
    }
    if(CurrentAmount >= 100 && CurrentAmount <= 50000){
      alert('Cashout successful')
      // balance.innerText = NewBalance;
      setBalance(NewBalance);
    }
  }
  else{
    if(agentNumber.length !== 11){
      alert('Invalid Number.')
    }
    else if(pinNumber !== '9762'){
      alert('Incorrect pin');
    }
  }  
})







// applied normal beginner like approch.
// const cashoutBtn = document.getElementById("cashout-btn");
// const agentNumber = document.getElementById("cashout-agent");
// const pinNumber = document.getElementById("cashout-pin");
// const amountNumber = document.getElementById("cashout-amount");
// const balance = document.getElementById("balance");

// cashoutBtn.addEventListener("click", () => {
//   const currentBalance = Number(balance.innerText);
//   const agent = agentNumber.value;
//   const pin = pinNumber.value;
//   const amount = Number(amountNumber.value);
//   const newBalance = currentBalance - amount;

//   if (newBalance < 0) {
//     alert("invalid amount");
//     return;
//   }
//   if (agent.length == 11 && pin == "9762") {
//     if (amount >= 100 && amount <= 50000) {
//       alert("withdrawal successful");
//       balance.innerText = `${newBalance}`;
//     }
//   } else {
//     alert("wrong pin or agent Number not valid");
//   }
//   agentNumber.value = "";
//   pinNumber.value = "";
//   amountNumber.value = "";
// });
