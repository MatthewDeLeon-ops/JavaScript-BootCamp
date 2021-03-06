// Multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous ', score = 0) {
   return `Name: ${name} - Score: ${score}` //template strings 
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
// A 25% tip on $40 would be $10
// place this code into a template string.

let getTip = function(bill,tip_amount = .2) {
   let percent = tip_amount * 100
   let tip = bill * tip_amount
   return `A ${percent}% tip on $${bill} would be $${tip}` 
}

let tips = getTip(60)
console.log(tips)


// let name = 'Scottay'
// let age = 500
// console.log(`I am ${age} years old. Hey, my name is johhny bbooiii${name}!`)


