//  Array Basics version \\

// Challenge \\

// 1. create an array with five todos 
// 2. you have x todos
// 3. Print the first and  last items ->

// const Todo_List = ['Get Groceries', 'Pick-up Laundry', 'Eat Lunch', 'Take Nap', 'Go Visit Friends'] // SQUARE BRACKETS make an array -- Done

// console.log(`You have ${Todo_List.length} todos!`)
// console.log(`Todo: ${Todo_List[0]}`)
// console.log(`Todo: ${Todo_List[4]}`)


// console.log(Todo_List.length) // shows the list number.
// console.log (Todo_List[0]) // displays the second note using the position number



// The for loop version of todo.js \\

const Todo_List = ['Get Groceries', 'Pick-up Laundry', 'Eat Lunch', 'Take Nap', 'Go Visit Friends']

Todo_List.shift() //get rid of first item
Todo_List.splice(2,1) // remove element 2
Todo_List.push('play with darci') // add item at end


console.log(`You have ${Todo_List.length} Todos!`)

Todo_List.forEach(function(Todo_List, index) {
    const num = index + 1
    console.log(`${num}. ${Todo_List}`)
})