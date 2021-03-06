 
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

const Word1 = new Guesstheword('Cat', 3)
console.log(Word1.fun1()) // c*t
