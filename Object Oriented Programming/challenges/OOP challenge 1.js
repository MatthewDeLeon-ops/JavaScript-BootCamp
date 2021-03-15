// create constructor function for the game hangman
// setup 2 attributes one for the word itself and another for the number of guesses allowed
// create 2 instances of it and print both to the console.

const Hangman = function(word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const HangmangameV1 = new Hangman('Xbox', 10)
console.log(HangmangameV1)

const HangmangameV2 = new Hangman('Airpods Pro', 1.25)
console.log(HangmangameV2)
