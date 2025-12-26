let randomNum = (Math.floor(Math.random() * 100 + 1))
// const randomNum = parseInt(Math.random()*100 +1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)//after storing userInput.value in variable you can empty the field userInput to new fresh input
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter valid number.")
    } else if (guess < 1) {
        alert("please enter number more than 1")
    } else if (guess > 100) {
        alert("please enter number less than 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You Guessed it right`)
    } else if (guess < randomNum) {
        displayMessage(`Number is low`)
    } else if (guess > randomNum) {
        displayMessage(`Number is high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''//cleanup method
    guessesSlot.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame() { //here we reset all the changes by emptying and removing the inputs and elements to restart the game process
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNum = (Math.floor(Math.random() * 100 + 1))//generate a new random Number and overwrite the previous random number
        prevGuess = []
        numGuess = 1
        guessesSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}

