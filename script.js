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

function printCards(cards, isdealer = false){
    let output = '';
    for (let i = 0; i < cards.length; i++){
        output += `${printCard(cards[i])}, `;
    }
    if (isdealer == true){
        output = output.replace(printCard(cards[0]), 'HIDDEN');
    }
    // substring removes the last ', '
    return output.substring(0, output.length - 2);
}

function printCard(card){
    let output = '';
    switch (card[0]) {
        case 1:
            output += 'Ace'
            break;
        case 2:
            output += 'Two'
            break;
        case 3:
            output += 'Three'
            break;
        case 4:
            output += 'Four'
            break;
        case 5:
            output += 'Five'
            break;
        case 6:
            output += 'Six'
            break;
        case 7:
            output += 'Seven'
            break;
        case 8:
            output += 'Eight'
            break;
        case 9:
            output += 'Nine'
            break;
        case 10:
            output += 'Ten'
            break;
        case 11:
            output += 'Knight'
            break;
        case 12:
            output += 'Queen'
            break;
        case 13:
            output += 'King'
            break;
    }
    output += ' of '
    switch (card[1]){
        case 1:
            output += 'hearts'
            break;
        case 2:
            output += 'diamonds'
            break;
        case 3:
            output += 'spades'
            break;
        case 4:
            output += 'clovers'
            break;
    }
    return output;
}

function deal(deck, hand, count = 1){
    for (let i = 0; i < count; i++)
    {
        hand.push(deck[0]);
        deck.splice(0, 1);
    }
}

let deck = createDeck();
let playerhand = [];
let dealerhand = [];

deck = shuffle(deck);
deal(deck, dealerhand, 2);
deal(deck, playerhand, 2);
console.log(`Players hand: ${printCards(playerhand)}\nDealers hand: ${printCards(dealerhand, true)}`);