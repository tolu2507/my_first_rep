let messageEl = document.getElementById("message_id");
let sumEl = document.getElementById("sum_id");
let cardEl = document.getElementById("card_id");
let playerEl = document.getElementById("player_id");

let player = {
    name: "Tolu",
    chips: 2000
};

let cards = [];
let hasBlackJack = false;
let sum = 0;
// console.log(sum);
let isAlive = false;
let message = "";

playerEl.textContent = player["name"] + "-" + " " +"$" + player["chips"];

function getRandomCard(){
    let rand = Math.floor(Math.random()*13) + 1;
    if (rand === 1) {
        console.log(11);
        return 11;
        
    } else if(rand > 10){
        console.log(10);
        return 10;
    }else{
        console.log(rand);
        return rand;
    }
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard
    cards = [firstCard, secondCard];
    renderGame();  
}

function renderGame() {
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i ++){
        cardEl.textContent +=  cards[i] + " " 
        // console.log(cards[i]);
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card ?";
    } else if(sum === 21){
        message = "you got BLACK JACK!";
        hasBlackJack = true;
    }else{
        isAlive = false;
        message = "you are out of the game!";
    };
    messageEl.textContent = message  
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard)
        renderGame();
        console.log(thirdCard);   
    }
}

// let age = 120;

// if (age < 100) {
//     console.log("Not Eligible💢");
// } else if(age === 100){
//     console.log("Here is your card from the king 🌝");
// }else{
//     if (age > 100) {
//         age -= 100;
//         console.log("Not Eligible, you got yours " + age + " years ago");
//     }    
// }


