// Functions - input, code, and output (return value).

let greetUser = function () {
    console.log('welcome user')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


// Challenge area  (failed)
//  convert fahrenheitToCelcius Function
//  call a couple of times (32 -> 0) (68 --> 20) 
//  Print the converted values. reference temp conversion file.

let fahrenheit = 68
let convertfahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit- 32) * (5/9)
    return celsius
}
let tempOne = convertfahrenheitToCelcius(32)   
let tempTwo = convertfahrenheitToCelcius(68)
console.log(tempOne)
console.log(tempTwo)
