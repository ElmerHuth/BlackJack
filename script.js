let deck = [];

// ace = 1, knight = 11, queen = 12, king = 13
// hearts = 1, diamonds = 2, spades = 3, clover = 4
// deck = [..., [13, 2], ...] 
// first number is value and second is sleeve in this case: king of diamonds

for (let i = 0; i < 4; i++){
    for (let x = 0; x < 13; x++){
        deck[13 * i + x] = [x + 1, i + 1];
    }
}

for(let i = 0; i < deck.length; i++){
    console.log(deck[i]);
}