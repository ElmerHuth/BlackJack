// ace = 1, knight = 11, queen = 12, king = 13
// hearts = 1, diamonds = 2, spades = 3, clovers = 4
// deck = [..., [13, 2], ...] 
// first number is value and second is sleeve in this case: king of diamonds

function shuffle(Deck){
    let inputDeck = Deck;
    let outputDeck = [];
    while (outputDeck.length < 52){
        let randomindex = Math.floor(Math.random() * (inputDeck.length - 1 + 1))
        outputDeck.push(inputDeck[randomindex]);
        inputDeck.splice(randomindex, 1);
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

function printCard([value, sleeve]){
    let card = '';
    switch (value) {
        case 1:
            card += 'Ace'
            break;
        case 2:
            card += 'Two'
            break;
        case 3:
            card += 'Three'
            break;
        case 4:
            card += 'Four'
            break;
        case 5:
            card += 'Five'
            break;
        case 6:
            card += 'Six'
            break;
        case 7:
            card += 'Seven'
            break;
        case 8:
            card += 'Eight'
            break;
        case 9:
            card += 'Nine'
            break;
        case 10:
            card += 'Ten'
            break;
        case 11:
            card += 'Knight'
            break;
        case 12:
            card += 'Queen'
            break;
        case 13:
            card += 'King'
            break;
    }
    card += ' of '
    switch (sleeve){
        case 1:
            card += "hearts"
            break;
        case 2:
            card += "diamonds"
            break;
        case 3:
            card += "spades"
            break;
        case 4:
            card += "clovers"
            break;
    }
    return card
}

let deck = createDeck();
deck = shuffle(deck);
for (let i = 0; i < deck.length; i++){
    console.log(printCard(deck[i]));
}
console.log(deck.length);