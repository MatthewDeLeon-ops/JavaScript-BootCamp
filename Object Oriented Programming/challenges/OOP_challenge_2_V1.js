// 1. Setup the word instance property as an array of lowercase letters. Done
// 2. Setup another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back. 
// If no guesses made output *** for every charcter not guessed. If guesses made correctly display the characters guessed 


// Step 1 \\
const Guesstheword = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    // will convert word instances to lowercase.
    this.remainingGuesses = remainingGuesses
    // Adds in the property for Guesses Remaining
    this.charactersguessed = ['o','x']
    // Array of characters used for the guess.
}

// Step 2 \\

Guesstheword.prototype.fun1 = function() {
    let components = ' '
    // This will take the word (string)
    this.word.forEach((character) => {
    if (this.charactersguessed.includes(character) || character === ' ')
    {
    components += character
    } 
    // Provide functionality to enable characters guessed to utilize characters provided in '' 
    else {
        components += '*'
    // Will hide the characters that were not guessed at all or were incorrectly guessed.
    }
})
    return components
}

const Word = new Guesstheword('xbox', 10)
console.log(Word.fun1())




            // Other\\
// will need a property for charactersguessed :)
// will need .toLowerCase() to enable conversion of uppercase to lowercase :)
// will need conditional statement to enable the functionality of disguising incorrect/non guessed characters
// prototype: object allowing you to add in what you want shared in a constructor and accessible. -- will need use this.
