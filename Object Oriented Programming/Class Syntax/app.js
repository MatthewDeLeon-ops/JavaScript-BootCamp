// import Guesstheword from ('../Hangman/Hangman')
const componentsEL= document.querySelector('#components')
const guessEL = document.querySelector('#guess')

//Setup the word you want the player to guess with the limit of guesses permitted
const Word1 = new Guesstheword('dog', 2)

componentsEL.textContent = Word1.challenge()
// Displays the word but with characters hidden
guessEL.textContent = Word1.guessingstatus()
// Displays the amount of attempts remaining
console.log(Word1.status)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    Word1.makeanattempt(guess)
    componentsEL.textContent = Word1.challenge()
    // displays the letters of the word if guessed right
    guessEL.textContent = Word1.guessingstatus()
    //refreshes guesses remaining when letter guessed wrong
    console.log(Word1.status)
})