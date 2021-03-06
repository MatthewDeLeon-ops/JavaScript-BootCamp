let isaccountlocked = true
let userRole = 'admin'
if (isaccountlocked){
    console.log('Is account locked')
} else {
    console.log('Welcome your account is unlocked.')
}


if (isaccountlocked) {
    console.log('Is account locked')
} else if(userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    
    console.log('welcome')
}

// // Challenge area using else and else if statement.
// let coldtemp = 45
// let hottemp = 118
// it is freezing outside! 32 result 1
// it is hot outside! result 150
// Go for it. it is pretty nice result 65

let temp = 20

if (temp <= 32) {
    console.log('It is Freezing')
} else if (temp >= 118) {
    console.log('IT is HOTTT!!!')
} else{
    console.log('Just go for it.')
}
