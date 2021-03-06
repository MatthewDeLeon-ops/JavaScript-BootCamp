
//Enabling strict mode
'use strict' // enables strict mode in the web browser
let data
const processData = () => {
    data = '123184239430'
}
processData()
console.log(data)

// read existing notes from localstorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
 try {
    return notesJSON ? JSON.parse(notesJSON): []
 } catch (e) {
     return []
 }
}

// save the notes to localstorage
const saveNotes = (notes) => {
    localStorage.setItem('notes',JSON.stringify(notes))
}

//remove a note from the list
const removeNote = (id) =>{
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note

const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    //setup the  button
    button.textContent = 'delete'
    noteEl.appendChild(button) 
    button.addEventListener('click', () => {
        removeNote(note.id)
        getSavedNotes(notes)
        renderNotes(notes,filters)
    })

    // set up the note title text
if (note.title.length > 0 ) {
    textEl.textContent = note.title 
} else {
    textEl.textContent ='A new Note'
}
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)

return noteEl
}

// sort my notes by one of the three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b)  => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) =>{
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)

    })
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}
