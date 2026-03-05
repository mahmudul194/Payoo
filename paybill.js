const payBtn = document.getElementById('pay-bill-btn')

payBtn.addEventListener('click',()=>{
    const paybillselect = document.getElementById('pay-bill-select');
    const select = paybillselect.value;
    const paybillbiller = document.getElementById('pay-bill-biller');
    const biller = paybillbiller.value;
    const paybillpin = document.getElementById('pay-bill-pin');
    const pin = paybillpin.value;
    const paybillamount = document.getElementById('pay-bill-amount');
    const amount = Number(paybillamount.value);
    const balance = document.getElementById('balance')
    const currentbalance = Number(balance.innerText)
    const remainingbalance = currentbalance - amount;

    if(select === 'Select To Pay'){
        alert('select a bill to pay');
        return;
    }
    if(biller.length != 11){
        alert('enter the correct numbere.')
    }
    if(remainingbalance < 0){
        alert('invalid balance stats.')
        return;
    }
    if(pin != '9762'){
        alert('invaid pin')
        return;
    }
    else{
        if(select !== 'Select To Pay' && biller.length === 11 && pin === '9762'){
            alert('payment successful')
            balance.innerText = remainingbalance;
        }
    }

    const transactions = document.getElementById('transactions-container')
    const newtransactions = document.createElement('div')
    newtransactions.innerHTML = `
     <div class="transactions-card p-5 bg-base-100">
                paid bill by ${biller} at ${new Date}
            </div>
    `
    transactions.append(newtransactions);
})
