// Lecture 38

// const { get } = require("http")

// create array with 5 different todos
// you have x todos
// print the first and last items

// const Todo_List = ['Get Groceries', 'Pick-up Laundry', 'Eat Lunch', 'Take Nap', 'Go Visit Friends'] // SQUARE BRACKETS make an array -- Done

// console.log(`You have ${Todo_List.length} todos!`)
// console.log(`Todo: ${Todo_List[0]}`)
// console.log(`Todo: ${Todo_List[Todo_List.length - 2]}`)


// console.log(Todo_List.length) // shows the list number.
// console.log (Todo_List[0]) // displays the second note using the position number

// Lecture 39 challenge \\
// delete 3rd item in the list
// add a new item to the end of the list
// remove the first item from the list.

// const Todo_List = ['Get Groceries', 'Pick-up Laundry', 'Eat Lunch', 'Take Nap', 'Go Visit Friends']

// Todo_List.splice(2,1) // delete third item
// Todo_List.splice(0,1) // remove the first item in list
// Todo_List[3] = 'play with Darci' // add in the new item to end of list
// console.log(Todo_List)
// console.log(Todo_List.length)

// lecture 40 challenge\\
// 1. The first item -- pickup laundry
// 2. The second item -- take nap

// console.log(`You have ${Todo_List.length} todos!`)

// Todo_List.forEach(function(Todo_List, index) {
//     const num = index + 1
//     console.log(`${num}. ${Todo_List}`)
// })

// lecture 41 challenge \\

// for (let count = 0; count < Todo_List.length; count++) {
//     const num = count + 1
//     const todos = Todo_List[count]
//     console.log(`${num}. ${todos}`)
// }

// Lecture 42 challenge \\

// 1.  Convert array to array of objects => text, completed.
// 2. Create function to remove a todo by text value

const todos = [{
    text: 'Udemy is not cool',
    completed: false // on bottom // udemy is actually friggin Great AF
}, {
    text: 'Get Groceries',
    completed: false // up top
}, {
    text: 'Milk is delicious',
    completed: true // on bottom
}, {
    text: 'Are you sure about that.',
    completed: false // up top
}, {
    text: 'Go Visit Friends',
    completed: true // on bottom
}]

// const deleteTodo = function (todos,todoText) {
//     const index = todos.findIndex(function(todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1 ) {
//         todos.splice(index, 1)-
//     }
// // if value > -1 then remove an item with the following position
// // -1 means no match > -1 means match
// }

// deleteTodo(todos, 'Eat Lunch')
// console.log(todos)

///// Lecture 44 Challenge Filtering Arrays \\\\

// create a function that just  shows the todo's yet to be completed. Utilize the filter functionality
// should not see the completed with value of true.
// console.log(getThingsToDo(todos))
// 

// const GetuncompletedTodos = function(todos){
//     return todos.filter(function(todo){
//     return !todo.completed
//     })
// }
// console.log(GetuncompletedTodos(todos))

// Lecture 45 Challenge Sorting Arrays \\ 

// Sort by completed properties.
// put all uncompleted properties at top
// put all completed properties at the bottom
// what makes one come before the other : if one is not completed.
// if the return number is negative, A will be shown before B.
// if the return number is 0, A and B will remain in the same order as when they entered the loop
// if the return number is positive, B will be shown before A.

const sortTodos = function(todos) {
    todos.sort(function(a , b) {
        if(a.completed < b.completed) {
            return -1
        } else if (a.completed < b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

        // Meads Solution \\

// const sortTodos = function(todos) {
//     todos.sort(function(a , b) {
//         if (!a.completed && b.completed){
//             return -1
//         } else if (!b.completed && a.completed) {
//             return 1
//         } else {
//             return 0
//         }
//     })
// }
// sortTodos(todos)
// console.log(todos)
