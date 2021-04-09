let cards;
const amountofcards = document.querySelector(".cards");
const list = ["bobrossparrot", "explodyparrot", "metalparrot", "fiestaparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]
let cardgroup = [];
let firstcardclick = null;
let correct = 0;
let count = 0;

function verify(){
    while (cards < 4 || (cards %2) !== 0 || cards > 14 || cards == null){
        cards = (prompt("Com quantas cartas deseja jogar?"));
    }
    
    for(let i=0; i < (cards/2); i++){
        const ecardlist =
        `<div onclick='flipcard(this)' class='ecard'> 
            <img class="front-face" src="Images/front.png">
            <img class="back-face" src="Images/${list[i]}.gif">
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
verify()

function flipcard(flip){
    flip.classList.add('fliped');
    if(firstcardclick === null){
        firstcardclick = flip;
        flip.setAttribute('onclick'," ");
        firstcardclick.setAttribute('onclick'," ");
    } else if(firstcardclick.innerHTML === flip.innerHTML) {
        flip.setAttribute('onclick'," ");
        firstcardclick.setAttribute('onclick'," ");
        firstcardclick = null;
        correct++;
    } else {
        setTimeout(deflip, 1000, firstcardclick, flip);
        firstcardclick = null;
    }
    count++

    win()
}
function deflip(firstcardtodeflip, secondcardtodeflip){
    firstcardtodeflip.classList.remove('fliped');
    firstcardtodeflip.setAttribute('onclick',"flipcard(this)");
    secondcardtodeflip.classList.remove('fliped');    
    secondcardtodeflip.setAttribute('onclick',"flipcard(this)");
    firstcardclick = null;
}
function win(){
    if(correct === (cards/2)){
        setTimeout(winmessage, 300);
        setTimeout(restart, 300)
    }
}
function winmessage(){
    alert(`Você ganhou em ${count} jogadas!`)
}
function restart(){
    const askrestar = prompt("Gostaria de jogar novamente?")
    if(askrestar === "Sim".toLowerCase()){
        location.reload()
    }
}