// ace = 1, knight = 11, queen = 12, king = 13
// hearts = 1, diamonds = 2, spades = 3, clover = 4
// deck = [..., [13, 2], ...] 
// first number is value and second is sleeve in this case: king of diamonds

function shuffle(inputDeck){
    let outputDeck = []
    while (outputDeck.length < 52){
        outputDeck.push(inputDeck[Math.floor(Math.random() * (outputDeck.length + 1))]);
    }
    return outputDeck;
}

function createDeck(){
    let outputDeck = [];
    // first loop is for the 4 sleeves, second loop is for the value ace -> king
    for (let i = 0; i < 4; i++){
        for (let x = 0; x < 13; x++){
            // creates the card in the correct position in the deck
            outputDeck[13 * i + x] = [x + 1, i + 1];
        }
    }
    return outputDeck;
}

let deck = createDeck();
deck = shuffle(deck);