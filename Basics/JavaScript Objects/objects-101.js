let myBook = {  // how to define a object
    title: '1984',
    author: 'George Orwell',
    pagecount: 326
}
console.log(myBook.title)
console.log(`${myBook.title} by {George Orwell}`)
// the . extension will allow me to get a single value (property) off of an object

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by {George Orwell}`)


//  Challenge area 

// name , age , location -- object properties
//  goal is to create the object and generate a string based off of the object property values.
//  Matthew is 23 and lives in Las Cruces
//  increase age by 1 and print message again.

let persacom = {
    Name: 'Matthew De Leon',
    age: 23 ,
    location: 'Las Cruces'
}

console.log(`${persacom.Name} is ${persacom.age} and lives in ${persacom.location})`)
persacom.age = persacom.age + 1
console.log(`${persacom.Name} is ${persacom.age} and lives in ${persacom.location})`)
 