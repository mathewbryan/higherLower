let player1;
// let player2;
let currentCard;
let userInput; 
let numCorrect = 0; 
let newCard; 

let deck = [
    [1, 'Spades'] , [2, 'Spades'] , [3, 'Spades'], [4, 'Spades'] , [5, 'Spades'],  [6, 'Spades'], [7, 'Spades'],
    [8, 'Spades'], [9, 'Spades'], [10, 'Spades'], [10, 'Spades'], [10, 'Spades'], [10, 'Spades'],
    [1, 'Diamands'] , [2, 'Diamands'] , [3, 'Diamands'], [4, 'Diamands'] , [5, 'Diamands'],  [6, 'Diamands'], [7, 'Diamands'],
    [8, 'Diamands'], [9, 'Diamands'], [10, 'Diamands'], [10, 'Diamands'], [10, 'Diamands'], [10, 'Diamands'],
    [1, 'Clubs'] , [2, 'Clubs'] , [3, 'Clubs'], [4, 'Clubs'] , [5, 'Clubs'],  [6, 'Clubs'], [7, 'Clubs'],
    [8, 'Clubs'], [9, 'Clubs'], [10, 'Clubs'], [10, 'Clubs'], [10, 'Clubs'], [10, 'Clubs'],
    [1, 'Hearts'] , [2, 'Hearts'] , [3, 'Hearts'], [4, 'Hearts'] , [5, 'Hearts'],  [6, 'Hearts'], [7, 'Hearts'],
    [8, 'Hearts'], [9, 'Hearts'], [10, 'Hearts'], [10, 'Hearts'], [10, 'Hearts'], [10, 'Hearts'],
]

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
    alert(`You managed to get through ${numCorrect} rounds`)
    // playAgain()
}

// used to start the game  
const startGame = () => {
    userInput = prompt("Hi! What's your name player 1?")
    player1 = userInput
    alert(`Great, lets see if you can play your cards right ${userInput}`)
    const cardPlayer = new Player(userInput, 1)
    console.log(cardPlayer.name)
    currentCardFunc()
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
if (newCard[0] > currentCard[0] && userInput == 1 || newCard[0] > currentCard[0] && userInput.toLowerCase() == 'higher'){
    alert(`Your new card is ${newCard}, you were right it was higher! Lets see if you'll be so lucky next time`)
    currentCard = newCard
    numCorrect += 1
    removeCard()
    
}
else if (newCard[0] < currentCard[0] && userInput == 2 || newCard[0] < currentCard[0] && userInput.toLowerCase() == 'lower'){
    alert(`Your new card is ${newCard}, you were right it was lower! Lets see if you'll be so lucky next time`)
    currentCard = newCard
    numCorrect += 1
    removeCard()
}
else if (newCard[0] == currentCard[0]){
    alert(`New card ${newCard} & ${currentCard} are the same, draw again`)
    drawCard()
}
else{
    alert(`Your card was ${newCard} too bad, you lose!!!`)
    scoreCalc()

}
}

// shows the user their current card and asks whether the next card will  be higher or lower
const currentCardFunc = () => {
    alert(`Your current card is ${currentCard}`)
    userInput= prompt(`Is your next card going to be higher or lower than ${currentCard} \n 1. Higher \n 2. Lower`)
    if (userInput == 1 || userInput.toLowerCase() == 'higher'){
    drawCard()
    }
    else if (userInput == 2 || userInput.toLowerCase() == 'lower') {
    drawCard()
    } 
    else{
        alert('You must make a choice')
        currentCardFunc()
    }      
}

// should this be combined in to draw card 
// assigns random card from deck to be the players first card
const firstCard = () => {
    currentCard = deck[Math.floor(Math.random()* deck.length)]
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
firstCard()
