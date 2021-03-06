// Multiple arguments
 let add = function(a, b, c) {
     return a + b + c
}

let result = add(10, 1, 5)
console.log(result)
 
// Default arguments
let getScoreText = function (name = 'Anonymous ', score = 0) {
    return name + ' - Score ' + score
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge Area (tip calculator)
//  take total of the bill and include tip percent (20%) and get the total tip amount.
// 2 arguments and a default for the tip percentage.
// first set of arguments -- good , works

let tipcalculation = function(bill,tip_amount = .20) {
    return bill * tip_amount // Argument 1 Default tip formula
}

let tip_total = tipcalculation(150.00,.35)
console.log(tip_total)  // argument to provide parameters for testing the calculator.

//calculator testing  -- overcomplicated it -- part missed.
let getTipTotal = tipcalculation(150)
console.log(getTipTotal)

