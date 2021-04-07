let cards;

function verify(){
        cards = (prompt("Com quantas cartas deseja jogar?"));
    while (cards < 4 || cards %2 !== 0 || cards > 14 || cards == null){
        cards = (prompt("Com quantas cartas deseja jogar?"));
    }
}
verify();