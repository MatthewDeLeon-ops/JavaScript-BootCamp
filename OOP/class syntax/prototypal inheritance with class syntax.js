// Prototypal Inheritance
// Add a method onto instances of an object.

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach((like) => {
      bio += `${this.firstName} likes ${like}. `;
    });
    return bio;
  }
  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const myPerson = new Person("Matthew", "DeLeon", 23, ["Javascript"]);
console.log(myPerson.getBio());

const person2 = new Person("Jacqueline", "Cai", 30);

// Person.prototype.getBio = function() {
//     return 'Testing Testing'
// }

console.log(person2.getBio());

// challenge
// convert the hangman application with constructors and 4 methods used.
// you should not need to change app.js to make things work
// test your work. DONT CLICK PLAY TILL DONE
