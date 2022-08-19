let flippedCard = false;
let firstCard, secondCard;
let boardLock = false;


const data = ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue', 'angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'];
const container = document.getElementById("memory_game");


window.onload = () => randomImage(data);
const exit=[];
let randomNum = null;
const randomImage = (data) => {
    for (let i = 0; i < data.length; i++) {
        const k = randomNum;
        exit.push(k);
        randomNum = Math.floor(Math.random() * data.length);

        if(!exit.includes(randomNum)){
            container.innerHTML += `<div class="memory_card" data-framework="${data[randomNum]}">
            <img src="images/${data[randomNum]}.svg" alt="${data[randomNum]}" class="front_face">
            <img src="images/js-badge.svg" alt="js-badge" class="back_face">
            </div>`;
        }
    }


    const cards = document.querySelectorAll(".memory_card");
    const flipCard = e => {
        if (boardLock) return;

        console.log(e.target.parentElement);
        const target = e.target.parentElement;

        target.classList.add("flip");

        console.log(target.dataset.framework);

        if (!flippedCard) {

            flippedCard = true;
            firstCard = target;
        } else {

            flippedCard = false;
            secondCard = target;

            checkMatch();
        }
    };

    const checkMatch = () => {
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            console.log("123");
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
        } else {
            boardLock = true;

            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");

                boardLock = false;
            }, 800);
        }
    };

    cards.forEach(card => {
        card.addEventListener("click", flipCard)
    })
};