const notes = ['Note 1', 'Note 2', 'Note 3']

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index){
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

for (let count = 0; count <= 2; count++) {
    console.log(count)
}

// components initializer, condition, final expression
//  The initializer is where we set the initial count.
//  The condition determines how long the loop should run. True if loop should run. False if looping should stop 
// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

// challenge area \\ FAILED 

const Todo_List = ['Get Groceries', 'Pick-up Laundry', 'Eat Lunch', 'Take Nap', 'Go Visit Friends']

Todo_List.splice(2,1)
Todo_List.push('play with darci')
Todo_List.shift()

console.log(`You have ${Todo_List.length} Todos!`)

Todo_List.forEach(function(Todo_List, index) {
    const num = index + 1
    console.log(`${num}. ${Todo_List}`)
})


for (let count = 0; count < Todo_List.length; count++ ) {
    const num = count + 1
    const todo = Todo_List[count]
    console.log(`${num}. ${todo}`)
}