const cashoutBtn = document.getElementById("cashout-btn");
const agentNumber = document.getElementById("cashout-agent");
const pinNumber = document.getElementById("cashout-pin");
const amountNumber = document.getElementById("cashout-amount");
const balance = document.getElementById("balance");
const currentBalance = balance.innerText;

cashoutBtn.addEventListener("click", () => {
  const agent = agentNumber.value;
  const pin = pinNumber.value;
  const amount = Number(amountNumber.value);
  const newBalance = currentBalance - amount;
  
  if (newBalance < 0) {
    alert("invalid amount");
    return;
  }
  if (agent == "01881164401" && agent.length == 11 && pin == "9762") {
    if (amount >= 100 && amount <= 50000) {
      alert("withdrawal successful");
      balance.innerText = `${newBalance}`;
    }
  } else {
    alert("wrong pin or agent Number not valid");
  }
});
