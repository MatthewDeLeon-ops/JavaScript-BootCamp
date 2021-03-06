const notes = [ {
    title: 'My next trip',
    body: ' I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'   
}]


// Lecture 39 Manipulating arrays \\

// console.log(notes.pop())
// notes.push('my new note')

// console.log(notes.shift())f
// notes.unshift('my first note')

// notes.splice(1, 0, 'This is the new second item')f

// notes[2] = 'This is now the new note 3'

// Lecture 40 \\

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)

// })



// Lecture 41 The for loop \\

// counting... 1 rewatch at 5:30 minutes (initializer (1x), conditions, final expression )
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }
// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }


 
// Lecture 42 Searching Arrays Part 1 \\ // revisit the postt Help needed and retry again.

// const index = notes.findIndex(function(note) {
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })
// console.log(index)

// Lecture 43 Searching Arrays Part 2 \\

const findNote = function(notes, noteTitle) {
    return notes.find(function(note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const note = findNote(notes, 'office modification')
// console.log(note)


// console.log(notes.length)
// console.log(notes)


// Lecture 44 filtering arrays \\

// const findNote = function(notes, noteTitle) {
//     return notes.find(function(note) {
//         return note.title.toUpperCase() === noteTitle.toUpperCase()
//     })
// }
// const findNotes = function(notes,query) {
//     return notes.filter(function(note){
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch  = note.body.toLowerCase().includes(query.toLowerCase())
//     return isTitleMatch || isBodyMatch
//     })
// }

// console.log(findNotes(notes, 'trip'))

// Lecture 45 Sorting arrays \\

const sortNotes = function(notes) {
    notes.sort(function (a , b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

// first item a and second item b (object from the array were sorting)
// if a comes first return -1, if a comes after b return 1 , If both items are in order return 0
// using to lower case will make sure that if there was a uppercase H and A the SORTING IN ALPHABETICAL ORDER WOULD WORK.                                                                                                       