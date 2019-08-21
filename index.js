let player1;
let currentCard;
let userInput; 
let numCorrect = 0; 
let newCard; 


let deck = [
    [1, 'Spades'] , [2, 'Spades'] , [3, 'Spades'], [4, 'Spades'] , [5, 'Spades'],  [6, 'Spades'], [7, 'Spades'],
    [8, 'Spades'], [9, 'Spades'], [10, 'Spades'], [10, 'Spades'], [10, 'Spades'], [10, 'Spades'],
    [1, 'Diamonds'] , [2, 'Diamonds'] , [3, 'Diamonds'], [4, 'Diamonds'] , [5, 'Diamonds'],  [6, 'Diamonds'], [7, 'Diamonds'],
    [8, 'Diamonds'], [9, 'Diamonds'], [10, 'Diamonds'], [10, 'Diamonds'], [10, 'Diamonds'], [10, 'Diamonds'],
    [1, 'Clubs'] , [2, 'Clubs'] , [3, 'Clubs'], [4, 'Clubs'] , [5, 'Clubs'],  [6, 'Clubs'], [7, 'Clubs'],
    [8, 'Clubs'], [9, 'Clubs'], [10, 'Clubs'], [10, 'Clubs'], [10, 'Clubs'], [10, 'Clubs'],
    [1, 'Hearts'] , [2, 'Hearts'] , [3, 'Hearts'], [4, 'Hearts'] , [5, 'Hearts'],  [6, 'Hearts'], [7, 'Hearts'],
    [8, 'Hearts'], [9, 'Hearts'], [10, 'Hearts'], [10, 'Hearts'], [10, 'Hearts'], [10, 'Hearts'],
]

// listens for a click action on the start button
startButton.addEventListener("click", () => {
    startButton.style.visibility = "hidden"
    firstCard()
})

// draws first card which is assigned to the players current card
const firstCard = () => {
    currentCard = deck[Math.floor(Math.random()* deck.length)]
    cardimage.src = `cards/${currentCard[0]}${currentCard[1]}.jpg`
    currentCardFunc()
}

// asks the user whether the next card is going to be higher or lower, waits on a click event
const currentCardFunc = () =>{ 
    message.innerHTML = `Is your next card going to be higher or lower than ${currentCard}`;
    higherButton.addEventListener('click', () => {
        userInput = 1;
        console.log('higher')
        drawNewCard()
    })

    lowerButton.addEventListener('click', () => {
        userInput = 2;
        console.log('lower')
        drawNewCard()
    })
}

// draws new card and assigns it to the newCard variable
const drawNewCard = ()  => {
    newCard = deck[Math.floor(Math.random()* deck.length)]
    console.log(newCard)
    higherOrLower()

 }

 // compares users input againt the two cards drawn and updates the card image 
 const higherOrLower = () => {
     if (newCard[0] > currentCard[0] && userInput == 1){
        currentCard = newCard
        number.innerHTML = `${currentCard}`
        numCorrect += 1
        roundsComplete.innerHTML = `${numCorrect}`
        cardimage.src = `cards/${currentCard[0]}${currentCard[1]}.jpg`
     }
     else if (newCard[0] < currentCard[0] && userInput == 2){
         currentCard = newCard
         number.innerHTML = `${currentCard}`
         numCorrect += 1
        roundsComplete.innerHTML = `${numCorrect}`
        cardimage.src = `cards/${currentCard[0]}${currentCard[1]}.jpg`

     }
     else if ( newCard[0] == currentCard[0] ) {
         drawNewCard()
     }

     else{
         message.innerHTML = `Incorrect your new card was ${newCard} game over`
         startButton.style.visibility = ""
     }

 }