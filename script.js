// Setup
let deck = createDeck();
let playerhand = [];
let dealerhand = [];
let action = '';

playBlackJack();

function playBlackJack(){
    startRound();
    playerturn();
    dealerturn();
}

function startRound(){

    // put everyones cards back into the deck if you've played before
    returncards(playerhand, playerhand.length);
    returncards(dealerhand, dealerhand.length);
 
    deck = shuffle(deck);
    deal(deck, dealerhand, 2);
    deal(deck, playerhand, 2);
}

function playerturn(){
    while (action != "stand"){
        action = prompt(
            `
            Dealers hand: ${printCards(dealerhand, true)}


            Players hand: ${printCards(playerhand)}
            
            
            Will you hit or stand?`
            );
        if (action == 'hit'){
            deal(deck, playerhand);
        }
    }
}

function dealerturn(){
    while(points(dealerhand)[0] < 17){
        deal(deck, dealerhand);
        action = prompt(
            `
            Dealers hand: ${printCards(dealerhand)}


            Players hand: ${printCards(playerhand)}
            
            
            `

        );
    }
}

// ace = 1, knight = 11, queen = 12, king = 13
// hearts = 1, diamonds = 2, spades = 3, clovers = 4
// deck = [..., [13, 2], ...] 
// first number is value and second is sleeve in this case: king of diamonds
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

function deal(deck, hand, count = 1){
    for (let i = 0; i < count; i++)
    {
        hand.push(deck[0]);
        deck.splice(0, 1);
    }
}

function returncards(target, amount){
    for(let i = 0; i < amount; i++){
        deck.push(target[i]);
    }
    target = [];
}

function printCards(cards, hidefirst = false){
    let output = '';
    for (let i = 0; i < cards.length; i++){
        output += `${printCard(cards[i])}, `;
    }
    if (hidefirst == true){
        output = output.replace(printCard(cards[0]), 'HIDDEN');
    }
    // substring removes the last ', '
    return output.substring(0, output.length - 2);
}

function printCard(card){
    const names = 
    [[
        'Ace',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Knight',
        'Queen',
        'King'
    ],
    [
        'hearts',
        'diamonds',
        'spades',
        'clovers'
    ]];
    return `${names[0][card[0] - 1]} of ${names[1][card[1] - 1]}`;
}