const notes = [{},{ 
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new set',
}]

// console.log(notes.indexOf({}))
// if negative value -- item not found.

// const index = notes.findIndex(function(note, _index) {
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })
// console.log(index)
// Part 2 of Arrays

const findNote = function (notes, noteTitle) {
    const note = notes.findIndex(function (note) {
        return note.title === noteTitle
    })
    return notes[note]
}
const note = findNote(notes, 'body')
console.log(note)

console.log(notes.length)
console.log(notes)


// cant follow the challenge because of the files being broken