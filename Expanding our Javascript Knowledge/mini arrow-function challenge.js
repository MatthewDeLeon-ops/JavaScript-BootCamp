// 1. find the person with age 22
// 2. print that persons name  with shorthand syntax

const square = (num) =>
num * num
console.log(square(25))

const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'Johnny',
    age: 32
},{
    name: 'Alison',
    age: 22
}]


const person = people.find((person) => person.age === 22)
console.log(person.name)
