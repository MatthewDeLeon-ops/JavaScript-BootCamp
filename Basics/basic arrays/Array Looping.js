const notes = ['Note 1', 'Note 2', 'Note 3'] // SQUARE BRACKETS make an array
const Todo_List = ['Cat food', 'kitchen', 'Buy Food', 'Work', 'Exercise']

// Mini Challenge for the Looping over array's challenge\\  

// forEach: Executes a specified function in the array.
//  1. Replace line with a for each method call (callback function). A Callback function: A function that gets passed to a function.
//  2. Print all of the items left to do.

notes.forEach(function(item, index) {
    console.log(index)
    console.log(item)
})
console.log(notes)



// console.log(`You still have ${Todo_List.length} Todo_List!`)
// Todo_List.forEach(function(Todo_List,index) {
//     const num = index + 1
//     console.log(`${num}. ${Todo_List}`)
// })

 