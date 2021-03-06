'use strict'

// Data in local storage lecture 62 \\

// localStorage.setItem(Location, 'phillidelphia')
// console.log (localStorage.getItem(Location))
// localStorage.removeItem(Location)
// localStorage.clear()


// const user ={
//     name: 'matthew',
//     age: 23
// }
// userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)

// Data in local storage lecture 63 \\

// innerHTML allows you to set the new html value and what goes inside that element. = '' will allow you to clear the results via filtering each time.

// --------------------------------------------------------------------

// console.log('this is from a different html document')
let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const Halos_birthday = moment()
// Halos_birthday.year(2004).month(3).date(16)
// console.log(Halos_birthday.format('MMM D, YYYY'))

//1.Add createdAt and updatedAt to the new notes (store timestamp)
//2. update updatedat when someone edits a title or body
//3. delete all old notes before testing.