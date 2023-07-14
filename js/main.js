console.log('BlackJack Loaded');

let balance = document.querySelector('.saldo');
const submit = document.querySelector('.zet-in');

submit.addEventListener('click', enterFunction());

function enterFunction(event) {
    if(event.keycode == 'Enter') {
        submitFunction()
    } else {
        alert('Function niet gelukt')
    }
} 
