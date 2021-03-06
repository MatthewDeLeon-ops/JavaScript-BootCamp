// Array Basics
// const notes = ['Note 1', 'Note 2', 'Note 3'] // SQUARE BRACKETS make an array
// console.log(notes)
// console.log(notes.length) // shows the list number.
// console.log (notes[1]) // displays the second note using the position number
// console.log (notes[notes.length - 1]) 

// Looping over arrays version
const notes = ['Note 1', 'Note 2', 'Note 3'] // SQUARE BRACKETS make an array
// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

notes[2] = 'This is now the new note 3'

notes.forEach(function(item) {
    console.log('test')
})
console.log(notes.length)
console.log(notes)
