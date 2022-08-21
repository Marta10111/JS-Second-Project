document.addEventListener("DOMContentLoaded", function () {
    startGame();
});

// Declair global variables//
let buttons = document.getElementsByTagName("button");
if (buttons.length !== 2) {
    alert(`Invalid number of buttons`);
    throw `Invalid number of buttons. Aborting!`;
}
let modal = document.getElementsByClassName("mod hidden")[0];
let div = document.getElementsByClassName("mod-text")[0];
let turnedCards = [];
let open = function (e) {
    openCard(turnedCards, e.currentTarget);
};

//Create game area with cards//
function startGame() {

    for (let button of buttons) {
        button.addEventListener("click", function () {
                modal.className = "mod hidden";
                startGame();
            });
    }
    //Reset the counter//
    document.getElementById("moves").innerText = 0;
    let oldCards = document.getElementsByClassName("card");
    while (oldCards.length > 0) {
        oldCards[0].remove();
    }

    //Create an array of random numbers//
    let arrayRandom = [];
    while (arrayRandom.length < 18) {
        let number = Math.floor(Math.random() * 18);
        if (arrayRandom.includes(number) === false) {
            arrayRandom.push(number);
        }
    }
    //Use ArrayRandom to create an array of the hidden images in random order.
    let cards = document.getElementsByClassName("hidden image");
    if (cards.length !== 18) {
        alert(`Invalid number`);
        throw `Invalid number. Aborting!`;
    }
    let shuffledCards = [];
    for (let i = 0; i < 18; i++) {
        shuffledCards.push(cards[arrayRandom[i]]);
    }
    //Create html code of the cards//
    for (let shuffledCard of shuffledCards) {
        let source = shuffledCard.getAttribute("src");
        let alt = shuffledCard.getAttribute("alt");
        let img = document.createElement("img");
        img.setAttribute("src", source);
        img.setAttribute("alt", alt);
        img.className = "card closed";
        let cardDiv = document.getElementsByClassName('cards');
        cardDiv[0].appendChild(img);
    }

    cards = document.getElementsByClassName("closed");
    for (let card of cards) {
        card.addEventListener("click", open, true);
    }
}


//Call checkPair function when 2 cards are clicked//
function openCard(turnedCards, card) {
    card.classList.remove("closed");
    card.removeEventListener("click", open, true);
    turnedCards.push(card);

    if (turnedCards.length === 2) {

        let cards = document.getElementsByClassName("card closed");
        for (let card of cards) {
            card.removeEventListener("click", open, true);
        }
        setTimeout(function () {
            checkPair(turnedCards);
            turnedCards.length = 0;
            addMove();
        }, 650);
    } else if (turnedCards.length > 2) {
        alert(`To many cards open`);
        throw `To many cards open. Aborting!`;
    }
}

/**
 * Check if the two cards clicked are matching.
 * If yes, change color and keep open.
 * If no, turn back and add eventlisteners again.
 */
function checkPair(turnedCards) {
    let source1 = turnedCards[0].getAttribute("src");
    let source2 = turnedCards[1].getAttribute("src");

    if (source1 === source2) {
        turnedCards[0].className = "card paired";
        turnedCards[1].className = "card paired";
        let cards = document.getElementsByClassName("card closed");
        for (let card of cards) {
            card.addEventListener("click", open, true);
        }
        setTimeout(function () {
            winGame();
        }, 500);
    } else {
        turnedCards[0].className = "card closed";
        turnedCards[1].className = "card closed";
        let cards = document.getElementsByClassName("card closed");
        for (let card of cards) {
            card.addEventListener("click", open, true);
        }
    }
}


//Show number of moves//
function addMove() {
    let moves = parseInt(document.getElementById("moves").innerText);
    document.getElementById("moves").innerText = ++moves;
}


//Calculate if all pairs are found//
function winGame() {
    let paired = document.getElementsByClassName("card paired");
    if (paired.length === 18) {
        let moves = parseInt(document.getElementById("moves").innerText);
        let oldRecord = parseInt(document.getElementById("record").innerText);

        while (div.children.length > 0) {
            div.children[0].remove();
        }
        if (moves < oldRecord) {
            modal.classList.remove("hidden");
            let h2 = document.createElement("h2");
            h2.innerText = "Impressing, thats a new best score!";
            div.appendChild(h2);
            let p = document.createElement("p");
            p.innerText = `You found all evil tweens within ${moves} moves!`;
            div.appendChild(p);
            recordCount();
        } else if (oldRecord === 0) {
            modal.classList.remove("hidden");
            let h2 = document.createElement("h2");
            h2.innerText = "Good job!";
            div.appendChild(h2);
            let p = document.createElement("p");
            p.innerText = `You found all evil tweens within ${moves} moves!`;
            div.appendChild(p);
            recordCount();
        } else {
            modal.classList.remove("hidden");
            let h2 = document.createElement("h2");
            h2.innerText = "Good job!";
            div.appendChild(h2);
            let p = document.createElement("p");
            p.innerText = `You found all evil tweens within ${moves} moves!`;
            div.appendChild(p);
            recordCount();
        }
    } else if (paired.length > 18) {
        alert(`Invalid number of paired cards`);
        throw `Invalid number of paired cards. Aborting!`;
    }
}


//Show the lowest number of moves//
function recordCount() {
    let moves = parseInt(document.getElementById("moves").innerText);
    let oldRecord = parseInt(document.getElementById("record").innerText);

    if (moves < oldRecord) {
        document.getElementById("record").innerText = moves;
    } else if (oldRecord === 0) {
        document.getElementById("record").innerText = moves;
    }
}