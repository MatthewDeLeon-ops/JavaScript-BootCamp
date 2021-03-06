// Prototypal Inheritance
// Add a method onto instances of an object.
// myPerson ---> Person.prototype --> Object.prototype--> null

const Person = function (firstName, lastName, age, likes = [], degree_type = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
  this.degree_type = degree_type
};

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`;

  this.likes.forEach((like) => {
    bio += `${this.firstName} likes ${like}. `;
  });
  
  this.degree_type.forEach((degree_type) => {
    bio += `${this.degree_type} majored in ${degree_type}. `;
  });

  return bio;
  // Placing a method (i.e. getBio) inside a property (i.e.prototype) within a constructor (i.e. Person) will grant access to individual components for all instances
};

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

// Example of a new class that can have the same properties as another class using extends. [Subclass]
// Override functionity and features in the {}
class Otherperson extends Person {
  constructor(firstName, lastName, age, likes,degree_type) {
      super(firstName,lastName,age,likes)
      this.degree_type = degree_type
    }
  getBio() {
    return `${this.firstName} ${this.lastName} majored in ${this.degree_type}`
    // Matthew majored in Business Administration
  }
  getGraduationYear() {
    return 2019
  }
}

const me = new Otherperson ("Matthew", "De Leon", 23, ["Javascript", "Family Time"], "Business Administration");

// me.getBio = function () {
//   return "This is cool";
// };

// uncomment to view the output of subclass method Other person.
console.log(me)
console.log(me.getGraduationYear())

// uncomment to view another method of getting the output customized with just the components listed.
// me.setName("Matthew DeLeon");
// console.log(me.getBio());

const person2 = new Person("Jacqueline", "Cai", 30);

console.log(person2.getBio());
