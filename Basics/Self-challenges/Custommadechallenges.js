// Challenge area  (failed)
//  convert fahrenheitToCelcius Function
//  call a couple of times (32 -> 0) (68 --> 20) 
//  Print the converted values. reference temp conversion file.


// Challenge area(custom made)
// Create a formula to determine the cost of 1 CAD. Then calculate the convert 2 CAD's to USD
//  Print the converted values. reference temp conversion file.
// = 1/1.4
let Dollar = 1.00 // good
let convertUSDOLLARTOCAD = function(Dollar) {
    let Canadian = (Dollar * 1.40175)
    return Canadian
}
let Dollarconversion1 = convertUSDOLLARTOCAD(2)
let Dollarconversion2 = convertUSDOLLARTOCAD(450)
console.log(Dollarconversion1)
console.log(Dollarconversion2)