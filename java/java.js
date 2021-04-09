let cards;
const amountofcards = document.querySelector(".cards");
const list = ["bobrossparrot", "explodyparrot", "metalparrot", "fiestaparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]
let cardgroup = [];

verify()

function verify(){
    while (cards < 4 || (cards %2) !== 0 || cards > 14 || cards == null){
        cards = (prompt("Com quantas cartas deseja jogar?"));
    }
    
    for(let i=0; i < (cards/2); i++){
        const ecardlist =
        `<div onclick='flipcard(this)' class='ecard'> 
        <img class="back-face" src="Images/front.png">
        <img class="front-face" src="Images/${list[i]}.gif">
        </div>`;
        cardgroup.push(ecardlist);
        cardgroup.push(ecardlist);
    }
    cardgroup.sort(randomize);
    for(let i=0; i < cards; i++){
        amountofcards.innerHTML += cardgroup[i];
    }
}

function randomize() { 
	return Math.random() - 0.5; 
}
function flipcard(flip){
    flip.classList.toggle('fliped')
}