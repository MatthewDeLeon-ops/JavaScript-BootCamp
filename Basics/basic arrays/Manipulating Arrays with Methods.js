const notes = ['Note 1', 'Note 2', 'Note 3'] 
// Functions and notes for them

console.log(notes.pop())
// notes.pop() removes the last element (item) in an array and then returns it. The one removed was note 3.

notes.push('My New Note') 
// Adds item to the array you created and in this case -- notes. Adds in My New Note.

notes.unshift('My First Note :) ') 
// inserts new element at the first position of the array.

//  Results \\

// Note 3
// [ 'My First Note :) ', 'Note 2', 'This is now new note 3' ]

notes.splice(1, 1) // allows adding elements in an array or remove elements anywhere in our code. providing 0 and, allows you to add an item in an array. 

//  To delete an item and add an item (replace an item) Do the following:  notes.splice(starting item, delete item, and replace item)

// Bracket Notation can be used to replace existing values.
notes[2] = 'This is now new note 3' 
console.log (notes)


// Challenge time for Manipulating Arrays \\

// delete the third item
// Add a new item at the end 
// Remove the first item from the list.


const Todo_List = ['Get Groceries', 'Pick-up Laundry', 'Eat Lunch', 'Take Nap', 'Go Visit Friends']
console.log(`You have ${Todo_List.length} todos!`)


// My solution works perfect
Todo_List.splice(2,1)
Todo_List.splice(0,1)
Todo_List[3] = 'play with Darci'
console.log(Todo_List)
console.log(Todo_List.length)

// // Instructor's Answer
// Todo_List.splice(2,1)
// Todo_List.push('play with Darci')
// Todo_List.shift()
// console.log(Todo_List)
// console.log(Todo_List.length)