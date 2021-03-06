// Global Scope (convert fahrenheighttocelcius, tempOne, tempTwo)
// Local scope (fahrenheit, celcius)
// Local scope (isFreezing)

let convertfahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit- 32) * (5/9)
    
    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertfahrenheitToCelcius(32)   
let tempTwo = convertfahrenheitToCelcius(68)
console.log(tempOne)
console.log(tempTwo)
 