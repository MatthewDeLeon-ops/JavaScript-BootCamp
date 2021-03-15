const Person = function (firstName,lastName,age) {
    this.firstName = firstName      // constructor here
    this.lastName = lastName
    this.age = age
}

const me = new Person('Matthew', 'De Leon', 23)
console.log(me)

// an example of a constructor function that gets used with the operator.

const person2 = new Person('Jacqueline', 'Cai', 30)
console.log(person2)

const person = function() {

}

const me = person()
console.log(me)

