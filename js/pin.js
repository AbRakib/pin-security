function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
       return getPin();
    }
    
}

function genaratePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-btn').addEventListener('click', function(){
    const pinShowField = document.getElementById('pin-show-field');
    pinShowField.value = '';
    pinShowField.value = getPin();
});

document.getElementById('calculator').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previusTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        } else if(number === '<') {
            const digits = previusTypeNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typeNumberField.value = remainDigits;
        }
    } else {
        const newTypeNumber = previusTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
});

document.getElementById('submit').addEventListener('click', function(){
    const genaratePin = document.getElementById('pin-show-field').value;
    const typePin = document.getElementById('typed-numbers').value;
    const successField = document.getElementById('pin-success');
    const unSuccessField = document.getElementById('pin-unsuccess');
    if (genaratePin == typePin) {
        unSuccessField.style.display = 'none';
        successField.style.display = 'block';
    } else {
        successField.style.display = 'none';
        unSuccessField.style.display = 'block';
    }
});