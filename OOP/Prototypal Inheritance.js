// Prototypal Inheritance
// Add a method onto instances of an object.

const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`;

  this.likes.forEach((like) => {
    bio += `${this.firstName} likes ${like}. `;
  });

  return bio;
  // Placing a method (i.e. getBio) inside a property (i.e.prototype) within a constructor (i.e. Person) will grant access to individual components for all instances
};

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

const me = new Person("Matthew", "De Leon", 23, ["Javascript", "Family Time"]);

me.getBio = function () {
  return "This is cool";
};

console.log(me)
// me.setName("Matthew De Leon");
// console.log(me.getBio());

const person2 = new Person("Jacqueline", "Cai", 30);

// Person.prototype.getBio = function() {
//     return 'Testing Testing'
// }

console.log(person2.getBio());
