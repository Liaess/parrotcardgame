let cards;
const amountofcards = document.querySelector(".cards")
verify()


function verify(){
        cards = prompt("Com quantas cartas deseja jogar?");
    while (cards < 4 || cards %2 !== 0 || cards > 14 || cards == null){
        cards = (prompt("Com quantas cartas deseja jogar?"));
    }
}

for(let i=0; i < cards; i++){
    const ecardlist = "<div class=\"ecard\"><img src=\"../Images/front.png\"></div>";
    amountofcards.innerHTML += ecardlist
}