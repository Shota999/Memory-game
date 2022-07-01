
const cards = document.querySelectorAll(".memory_card");
let flippedCard = false;
let firstCard , secondCard;
let boardLock = false;

const flipCard = e => {
    if(boardLock) return;

    // console.log(e.target.parentElement);

    const target = e.target.parentElement;

    if(target === firstCard) return;

    target.classList.add("flip");

    // console.log(target.dataset.framework);

    if (!flippedCard){

        flippedCard = true;
        firstCard = target;
    } else{

        flippedCard = false;
        secondCard = target;

        checkMatch();
    }
};
const checkMatch = () =>{
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        
        firstCard.removeEventListener("click" , flipCard);
        secondCard.removeEventListener("click" , flipCard);
    }else{
        boardLock = true;

        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");

            boardLock = false;
        }, 800);
    }
};

cards.forEach(card => {
    card.addEventListener("click" , flipCard)
})