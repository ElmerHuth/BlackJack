// Setup
let deck = createDeck();
let playerhand = [];
let dealerhand = [];
let action = '';

gameloop();

function gameloop(){
    let play = true;
    prompt('Welcome to BlackJack!');
    while (play){
        // put everyones cards back into the deck if you've played before
        returncards(playerhand, playerhand.length);
        returncards(dealerhand, dealerhand.length);

        deck = shuffle(deck);
        deal(deck, dealerhand, 2);
        deal(deck, playerhand, 2);

        playerturn();
        dealerturn();
        endgame();

        // ask if the player wants to play another round
        action = '';
        while (action != 'yes' && action != 'no'){
            action = prompt('Play again? (yes/no)');
        }
        if (action == 'no'){
            break;
        }
    }
    prompt('Thank you for playing! :)');
}

function playerturn(){
    while (action != "stand" && points(playerhand)[0] < 22){
        action = prompt(`Dealers hand(${points(dealerhand, true)[0]}): ${printCards(dealerhand, true)}

Players hand(${points(playerhand)[0]}): ${printCards(playerhand)}
            
Will you hit or stand?`);
        if (action == 'hit'){
            deal(deck, playerhand);
        }
    }
}

function dealerturn(){
    // skips play if player is bust
    while(points(dealerhand)[0] < 17 && points(playerhand)[0] < 22){
        action = prompt(`Dealers hand(${points(dealerhand)[0]}): ${printCards(dealerhand)}

Players hand(${points(playerhand)[0]}): ${printCards(playerhand)}
            
`);
        deal(deck, dealerhand);
    }
}

function endgame(){
    let result = '';
    // Dont reveal dealers card if player is bust
    let reveal = false;
    // Förlåt för alla 'if' satser
    if (points(playerhand)[0] <= 21){
        if (points(dealerhand)[0] <= 21){
            if (points(playerhand)[0] <= points(dealerhand)[0]){
                if(points(playerhand)[0] == points(dealerhand)[0]){
                    result = 'The game is a Draw!';
                }
                else{
                    result = 'Dealer Wins!';
                }
            }
            else{
                result = 'Player Wins!';
            }
        }
        else{
            result = 'Dealer is BUST, Player Wins!';
        }
    }
    else{
        result = 'Player is BUST, Dealer Wins!';
        reveal = true;
    }
    action = prompt(`Dealers hand(${points(dealerhand, reveal)[0]}): ${printCards(dealerhand, reveal)}

Players hand(${points(playerhand)[0]}): ${printCards(playerhand)}
            
${result}`);
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
    target.splice(0, target.length);
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

function points(target, hidefirst = false){
    let points = [0, 0];
    for (let i = 0; i < target.length; i++){
        if (i == 0 && hidefirst){
        }
        else{
            if (target[i][0] == 1){
                points[0] += 1;
                points[1]++;
            }
            else{
                points[0] += target[i][0];
            }
        }
    }
    // add aces to points if possible
    for (let i = 0; i < points[1]; i++){
        if (points[0] + 10 < 22 && points[1] > 0){
            points[0] += 10;
            points[1]--;
        }
    }
    return points;
}