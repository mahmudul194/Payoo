const bonusBtn = document.getElementById('get-bonus-btn')

bonusBtn.addEventListener('click',()=>{
    const BonusCode = document.getElementById('get-bonus-code')
    const code = BonusCode.value;
    const balance = document.getElementById('balance')
    const currentBalance = Number(balance.innerText);
    const Bonusamount = 785;
    const NewBalance = currentBalance + Bonusamount;
    if(code === 'ph-69'){
        alert('Your bonus was added')
        balance.innerText = NewBalance;
    }
    else{
        alert('wrong bonus code');
        return;
    }
    BonusCode.value = '';
})
