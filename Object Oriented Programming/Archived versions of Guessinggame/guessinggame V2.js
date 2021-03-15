
// Create a method for making a guess ... Done
//1. should accept a character for guessing  -- done
//2. should add unique guesses to list of guesses -- if statement -- done
//3. should decrement the guesses left by 1 in a unique guess isn't a match.

const Guesstheword = function(word, attemptsleft) {
    this.word = word.toLowerCase().split('')
    this.attemptsleft = attemptsleft
    this.charactersguessed = []
}
Guesstheword.prototype.fun1 = function() {
    let components = ' '
    this.word.forEach((character) => {
    if (this.charactersguessed.includes(character) || character === ' ')
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
    // case conversion
    const isunique = !this.charactersguessed.includes(guess) 
    // checks inside the array for info when no guesses h ave been made.
    const badattempt = !this.word.includes(guess)
    // Checks and determines if the characters provided  don't match anything in the word to be guessed. Provides a value of true if its a bad guess and a value of false if its a valid guess.

    if (isunique) {
        this.charactersguessed.push(guess)
    }  
     // if character is guessed correctly add it to the array. 

    if (isunique && badattempt) {
        this.attemptsleft = this.attemptsleft -1
    }
    // if these two conditions (the guess does exist but is not a valid character guessed) are met then the amount of guesses will be reduces 1 time per guess.
}

const Word1 = new Guesstheword('Cat', 2)
// Word1.makeanattempt('C')
// Word1.makeanattempt('z')
// Word1.makeanattempt('t')


console.log(Word1.fun1()) // c*t
console.log(Word1.attemptsleft)
// print remaining guesses should be 1
 
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    Word1.makeanattempt(guess)
    console.log(Word1.fun1()) // c*t
    console.log(Word1.attemptsleft)
})
