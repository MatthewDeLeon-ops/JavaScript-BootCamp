//shorthand syntax

const square = (num) =>
num * num

// Standard Syntax
// const squareLong = (num) => {
//     return num * num
// }
console.log(square(5))

const people = [{
    name: 'Andrew',
    Age: 30
}, {
    name: 'Johnny',
    age: 45
},{
name: 'Jess',
age: 21
}]

// const under30 = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

