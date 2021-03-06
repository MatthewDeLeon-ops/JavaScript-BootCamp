'use strict'

// const todos = [{
//     text: 'Oranges are sweet',
//     completed: true // on bottom // udemy is actually friggin Great AF
// }, {
//     text: 'Get fake Groceries',
//     completed: false // up top
// }, {
//     text: 'throw away bad milk',
//     completed: true // on bottom
// }, {
//     text: 'Are you sure about that.',
//     completed: true // up top
// }, {
//     text: 'dont Visit Friends',
//     completed: false // on bottom
// }]
 
let todos = getSavedTodos()
const filters = {
    searchText: '',
    // hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#new-todo').addEventListener('submit',(e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
document.querySelector('#hide-completed').addEventListener('change',(e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// document.querySelector('#Delete-todo').addEventListener('Delete', function(e) {
//     todos.textContent.pop({
//         text: e.target.elements.text.value
//     })
//     renderTodos(todos,filters)
//     e.target.text.value = ''
// })

// previously used syntax
