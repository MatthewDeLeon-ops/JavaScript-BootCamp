//  === is the equality operator
//  !== THE Not equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

let temp = 32
let isFreezing = temp <= 32 
if (temp <= 32) {
    console.log('It is freezing outside!')  
} 

if (temp >= 110){
    console.log('It is way to hot outside :(')
}
// challenge area

// Create age set to your age
// calculate is child - if they are 7 or under
//  calc is senior - if they are 65 or older
//  print is child val.
//  print is senior value.
let age = 1
let ischild = age <= 7
let isSenior = age >= 65
console.log(ischild)
console.log(isSenior)


//  CHALLENGE AREA
//  IF 7 OR UNDER PRINT MESSAGE ABOUT CHILD PRACTICING
// IF 65 OR OLDER PRINT MESSAGE ABOUT SENIOR DISCOUNT.
if (age <= 7) {
    console.log('You get a epic child discount')
}
if (age >= 65) {
    console.log('You will get a well deserved Senior Discount')
}