// let num = 103.91 

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// // before 0 - .999999
// let minimum = 10
// let maximum = 20
// let randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum // changes the number range for which the random number is generated.
// console.log(randomNumber) 



// math.floor - Round a number downward to its nearest integer:
// math.random - Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)


 //// challenge area 
// Create a function that takes in the persons guess.
// Generate random number in range 
// determine if the persons guess was within the range.
// 1 - 5 - true if correct - false if not correct
 

// let min = 1
// let max = 5
// // Sets the number parameters.
 
// let randomNumber = Math.floor(Math.random() * 5) + 1 // random number generator
 
// let persons_guess = 3 
// let guess_validator = function(persons_guess) {
//     if (persons_guess == randomNumber)
//     {
//         return true
//     }
//     else {
//         return false
//     }
// }
 
// console.log(randomNumber) // Displays the random number generated
// console.log(persons_guess) // Displays the persons guess
// console.log(guess_validator(persons_guess))  // The part of function that compares the persons guess to the generated number.

let minimum = 1
let maximum = 5
let randomNum = Math.floor(Math.random() * 5) + 1 // random number generator
// Sets the number parameters.
let personsguess = Math.floor(Math.random()* 6) // the person random guess
 
let guessvalidator = function(personsguess) {
    if (personsguess == randomNum)
    {
        return true
    }
    else {
        return false
    }
}
 
console.log (randomNum) // Displays the random number generated
console.log(personsguess) // the persons guess
console.log(guessvalidator(personsguess))