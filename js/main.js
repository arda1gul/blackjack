console.log('BlackJack Loaded');

const submit = document.querySelector('.zet-in');

submit.addEventListener('click', play)

function play() {
    let inzet = document.querySelector('.bet');
    let chips = 100000;
    let newBalance = chips - inzet.value
    document.querySelector('.saldo').innerHTML = `${newBalance}`
    if (inzet.value > 0 && inzet.value <= chips) {
        playerCards()
    } else {
        alert('Vul een geldig bedrag in')
    }
}


function playerCards() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (let i = 0; i < numbers.length; i++);
    let cardShuffle = numbers[Math.floor(Math.random() * numbers.length)];
    let cardShuffleTwo = numbers[Math.floor(Math.random() * numbers.length)];
    let totalPlayer = cardShuffle + cardShuffleTwo;
    document.querySelector('.player-cards').innerHTML = `- ${cardShuffle}`
    setTimeout(secondCard, 2000)


    function secondCard() {
        document.querySelector('.player-cards').innerHTML = `- ${totalPlayer}`
    }
    setTimeout(dealerCards, 3000)

    let hit = document.querySelector('.hit');
    hit.addEventListener('click', hitFunction);
    function hitFunction() {
        if(hit) {
            let cardShuffleHit = numbers[Math.floor(Math.random() * numbers.length)];
            newBalance = totalPlayer + cardShuffleHit;
            document.querySelector('.player-cards').innerHTML = `- ${newBalance}`
        } else {
            alert('hallo')
        }


        // if (hit) {
        //     hitFunctionTwo()
        // } else {
        //     alert('werkt niet')
        // }
    }
}

function dealerCards() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (let i = 0; i < numbers.length; i++);
    let cardShuffle = numbers[Math.floor(Math.random() * numbers.length)];
    document.querySelector('.dealer-cards').innerHTML = `- ${cardShuffle}`
}

let stand = document.querySelector('.stand');
// stand.addEventListener('click', standFunction);

function hitFunctionTwo() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let cardShuffleHitTwo = numbers[Math.floor(Math.random() * numbers.length)];
    hitBalance = newBalance + cardShuffleHitTwo;
    document.querySelector('.player-cards').innerHTML += `${hitBalance}`
}