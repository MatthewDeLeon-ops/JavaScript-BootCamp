// take in the students score, total possible score for example: 15/20 ~ 75
// 15 / 20 ~> you got a C (75%)!! RETURN STRING FROM FUNCTION
// A 90-100 gud, B 80-89, C 70 - 79 gud, D 60-69 gud, F 0-59 gud
// if statements used to populate grade results for a - f
// Below is my solution , Meads answer @ 11:27

let calculator_cool = function(points,totalpoints) {
    if (typeof points === 'number' && typeof totalpoints === 'number') {
    const percent = (points / totalpoints) * 100
    if (percent >= 90 && percent <= 100)
        return ` you got an A (${percent}%)!`
    else if (percent > 80 && percent <= 90)
        return `you got an B (${percent}%) nice job`
    else if (percent >= 70 && percent < 80) 
        return ` you got an C (${percent}%)!`      
    else if (percent > 60 && percent < 70)
        return ` you got an D (${percent}%)!`  
    else
        return `you got an F (${percent}%) try again!`
} else {
        throw Error('Please only enter in numbers homie')
    }
}
try {
    const result = calculator_cool (9,true)
    console.log(result)
} catch (e) {
    console.log(e.message)
}

// //  Solution

// let gradecalc = function(score,totalscore) {
//     let percent = (score / totalscore) * 100
//     let lettergrade = ''
//  if (percent >= 90) {
//      lettergrade = 'A'
//  } else if (percent >= 80) {
//      lettergrade = 'B'
//  } else if (percent >= 70) {
//      lettergrade = 'C'
//  } else if (percent >= 60) {
//      lettergrade = 'D'
//  } else {
//      lettergrade = 'F'
//     }

//     return `You got a ${lettergrade} (${percent}%)!`
// }

// let result = gradecalc(12,20)
// console.log(result)

// challenge

// 1.  use try catch with my call and print out the message if it fails print a error message to screen
// 2. Dont look at other code
// 3.
// 4.
// 5.