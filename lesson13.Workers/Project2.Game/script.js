//отримуєм ім'я з input
function getInput() {
    let nameInput = document.getElementById('nameInput').value;
    return sessionStorage.setItem('name', nameInput)
}
let myName = sessionStorage.getItem('name')

let playerName = document.querySelector('#playerName');
playerName.innerHTML = myName;

// counter
let myCounter = document.querySelector('#count')
num = 0;
function countPlus() {
    ++num;
    let myCounter = document.querySelector('#count');
    myCounter.textContent = num;
}
let myResult = document.querySelector('#result')
myResult.innerHTML = myCounter;
//гра
const cards = document.querySelectorAll('.cards');
let mygame = document.querySelector('.mygame');

let hasFlippedCard = false;
let lock = false;
let firstCard, secondCard;


function flipCard() {
    if (lock) return;
    if (this === firstCard) return alert('Не можна вибирати одну і ту саму карту');


    this.classList.add('flip'); //додаємо клас flip в наш <div>

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkOn();
    countPlus();
    console.log(num)

}

function checkOn() {
    if (firstCard.dataset.hero === secondCard.dataset.hero) {
        disableCards();
        return;
    }
    alert('Не вгадав, шукай далі!')
    returnCards();

}

let start = Date.now();
let end = null;

function disableCards() {

    if (document.querySelectorAll('.cards').length > 2) {
        alert('Так тримати!');
        firstCard.remove();
        secondCard.remove();
        resetBoard();

    }
    else {
        end = Date.now();
        let elapsed = end - start;
        let seconds = Math.floor(elapsed / 1000)
        alert('Done')
        firstCard.remove();
        secondCard.remove();
        let finishWindow = document.querySelector('.finishWindow')
        finishWindow.classList.add('active')
        let myResult = document.querySelector('#result')
        myResult.textContent = num + 1;
        let timeEnd = document.getElementById('timeEnd');
        timeEnd.textContent = seconds;
    }

}
//ф-ця, що повертає карти в дефолтне положення
function returnCards() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}
//функція, яка не дає натиснути на одну і ту саму карту, і щоб не спрацювала істинна умова.
function resetBoard() {
    [hasFlippedCard, lock] = [false, false];
    [firstCard, secondCard] = [null, null];

}
//функція, яка рандомізує поле з картами, при кожному оновленні
(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 16);
        card.style.order = ramdomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard))



if (navigator?.serviceWorker) {
    // console.log('Service Worker Supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then((req) => console.log('Service Worker Registered'))
            .catch((err) => console.log(`Service Worker Error:  ${err}`));
    });
}
