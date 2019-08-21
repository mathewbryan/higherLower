let player1;
// let player2;
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


startButton.addEventListener("click", () => {
    startButton.style.visibility = "hidden"
    firstCard()
})

class Player {
    constructor(name){ 
    this._name = name
    this._score;
}
get name(){
    return this._name
}
get score(){
    return this._score
}
get currentCard(){
    return this._currentCard
}
}

// const cardPlayer = new player(startGame())
// console.log(cardPlayer.name)

// can be used to see how many correct guesses a user has 
const scoreCalc = () =>{
    numCorrect += 1
    roundsComplete.innerHTML = numCorrect
    numCorrect = 0 
    currentCard;
    newCard
    cardimage.src = "./cards/Gray_back.jpg"
    startButton.style.visibility = ""

    // playAgain()
}

// used to start the game  
const startGame = () => {
    // userInput = prompt("Hi! What's your name player 1?")
    // player1 = userInput
    // alert(`Great, lets see if you can play your cards right ${userInput}`)
    roundsComplete.innerHTML = numCorrect
    const cardPlayer = new Player(userInput, 1)
    console.log(cardPlayer.name)
    currentCardFunc()
}

// shows the user their current card and asks whether the next card will  be higher or lower
const currentCardFunc = () => {
    message.innerHTML = `Is your next card going to be higher or lower than ${currentCard}`;
    // userInput= prompt(`Is your next card going to be higher or lower than ${currentCard} \n 1. Higher \n 2. Lower`)

    higherButton.addEventListener("click", () => {
        userInput = 1;
        console.log('higher')
        drawCard()
    })
    
    lowerButton.addEventListener("click", () => {
        userInput = 2;
        console.log('lower')
        drawCard()
    })
   
}

// picks random card from the deck variable
const drawCard = () => {
    newCard = deck[Math.floor(Math.random()* deck.length)]
    console.log(newCard)
    if (deck === undefined || deck.length < 1){
    alert('There is no more cards left in the deck') 
    }
    else{
        higherOrLower()   
    }
}

// compares new card to players current card & compares to user guess
const higherOrLower = () => {
if (newCard[0] > currentCard[0] && userInput == 1 ){
    message.innerHTML = `Your new card is ${newCard}, you were right it was higher! Lets see if you'll be so lucky next time`
    currentCard = newCard
    cardimage.src = `cards/${currentCard[0]}${currentCard[1]}.jpg`
    
    numCorrect += 1

    removeCard()
    
}
else if (newCard[0] < currentCard[0] && userInput == 2 ){
    message.innerHTML = `Your new card is ${newCard}, you were right it was lower! Lets see if you'll be so lucky next time`
    currentCard = newCard
    cardimage.src = `cards/${currentCard[0]}${currentCard[1]}.jpg`
    numCorrect += 1
    removeCard()
}
else if (newCard[0] == currentCard[0]){
    message.innerHTML = `New card ${newCard} & ${currentCard} are the same, draw again`
    currentCard = newCard
    drawCard()
}
else{
    message.innerHTML = `Your card was ${newCard} too bad, you lose!!!`
    currentCard = newCard
    cardimage.src = `cards/${currentCard[0]}${currentCard[1]}.jpg`
    scoreCalc()

}
}



// should this be combined in to draw card 
// assigns random card from deck to be the players first card
const firstCard = () => {
    currentCard = deck[Math.floor(Math.random()* deck.length)]
    cardimage.src = `cards/${currentCard[0]}${currentCard[1]}.jpg`
    currentCard[0]
    startGame()
}    

// removes chosen card from the deck array
const removeCard = () => { 
removeIndex = deck.indexOf(currentCard)
console.log(deck.indexOf(currentCard))
// delete deck[removeIndex]
deck.splice(removeIndex, 1) 
console.log(deck)
currentCardFunc()
}

// // starts a new game or quits the program
// const playAgain = () => {
//     userInput = prompt(`Would you like to play again ${cardPlayer.name}? \n 1. Play Again \n 2. Leave`)
//     if (userInput == 1) {
//         firstCard()
//     }
//     else if (userInput == 2) {
//     }
//     else {
//         alert(`Please enter a valid choice`)
//     }
// }

// use first card to pick a random then startGame runs through a new game 
