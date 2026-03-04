const login = document.getElementById('login-btn')
const number = document.getElementById('number-input')
const pin = document.getElementById('pin-input')
login.addEventListener('click',()=>{
    const Input_pin = pin.value;
    const Input_number = number.value;
    if(Input_number == '01872549981' && Input_pin == '9762'){
        alert('login success');
        
    }
    else{
        alert('login failed');
    }
})