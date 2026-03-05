const addMoneyBtn = document.getElementById('add-money-btn')

addMoneyBtn.addEventListener('click',()=>{
    const selectBank = document.getElementById('add-money-bank');
    const BankaccountNumber = document.getElementById('add-money-bank-account');
    const amount = document.getElementById('add-money-amount');
    const pinNumber = document.getElementById('add-money-pin');
    const account = BankaccountNumber.value;
    const pin = pinNumber.value;
    const balance = document.getElementById('balance');
    const currentBalance = Number(balance.innerText);
    const addAmount = Number(amount.value);
    const bankS = selectBank.value;
    const NewBalance = currentBalance + addAmount;

    if(bankS === 'Select Bank'){
        alert('Choose a bank');
        return;
    }
    if(account.length != 11){
        alert('invaid bank account');
        return;
    }
    if(pin != '9762'){
        alert('invalid pin code');
        return;
    }
    else{
        if(addAmount > 50000){
            alert('Limit exceeded!! The limit is 50000 taka')
            return;
        }
        if(addAmount >= 100){
            alert('Money added to the account');
            balance.innerText = NewBalance;
        }
        else if(addAmount < 100){
            alert('you can not add less than 100 taka.')
            return;
        }
    }

    pinNumber.input = ''
    amount.value = ''
    BankaccountNumber.value = '';
})