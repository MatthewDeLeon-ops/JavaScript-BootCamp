// 1. Display the puzzle in the browser instead of the console. use dom manipulation to get this done i.e. (**** he**br*) Done -- fixed

// 2. Display the guesses left to the browser instead of console. Have the guesses left shown up in the browser window) DONE  

// 3. Separate the Hangman definition from the rest of the app code (use app.js)  -- refactoring code to separate hangman definition with the actual usage of the class. hint move lines 37 - 46 into the app.js file and link it to the hangman III file.

const Guesstheword = function(word, attemptsleft) {
    this.word = word.toLowerCase().split('')
    this.attemptsleft = attemptsleft
    this.charactersguessed = []
}
Guesstheword.prototype.fun1 = function() {
    let components = ''
    this.word.forEach((character) => {
    if (this.charactersguessed.includes(character) || character === '')
    {
    components += character
    } 
    else {
        components += '*'
    }
})
    return components
}

Guesstheword.prototype.makeanattempt = function(guess) {
    guess = guess.toLowerCase()
    const isspecial = !this.charactersguessed.includes(guess) 
    const badattempt = !this.word.includes(guess)

    if (isspecial) {
        this.charactersguessed.push(guess)
    }

    if (isspecial && badattempt) {
        this.attemptsleft = this.attemptsleft -1
    }
}


