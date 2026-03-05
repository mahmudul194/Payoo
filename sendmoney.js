const sendBtn = document.getElementById("send-money-btn");

sendBtn.addEventListener("click", () => {
  const sendmoneyuser = document.getElementById("send-money-user");
  const sendmoneyamount = document.getElementById("send-money-amount");
  const sendmoneypin = document.getElementById("send-money-pin");
  const balance = document.getElementById("balance");
  const currentBalance = Number(balance.innerText);
  const userNumber = sendmoneyuser.value;
  const amount = Number(sendmoneyamount.value);
  const pin = sendmoneypin.value;
  const newBalance = currentBalance - amount;


  if (userNumber.length != 11) {
    alert("Invalid Number please try again.");
    return;
  }

  if (pin != "9762") {
    alert("Invalid pin number");
    return;
  }

  if (amount > 50000) {
    alert("You can not send more then 50000 a day.");
  }

  if (newBalance < 0) {
    alert("cannot send money due to insufficiant balance");
  }
   else {

    if (userNumber.length === 11 && pin === "9762") {
      alert(`You successfully sent ${amount} taka to ${userNumber} number.`);
      balance.innerText = newBalance;
    }
  }

  sendmoneyuser.value = "";
  sendmoneyamount.value = "";
  sendmoneypin.value = "";

});
