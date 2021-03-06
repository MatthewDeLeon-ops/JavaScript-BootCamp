let name ='  Matthew De Leon  '

// length Property -- validate user password with character length -- example use case
// console.log(name.length)

// convert to upper case
// console.log(name.toUpperCase())

// convert to lowercase
// console.log(name.toLowerCase())

//Includes method
// let password = 'abc123password3232'
// password.includes('password')
// console.log(password.includes('password'))

// //Trim
// console.log(name.trim())


// challenge
// isValidPassword: function validates password using a single argument and return true if a password is true else false
// true if length is more than 8 -- and it doesnt contain the word password

let isValidPassword = function(password) {
 if (password.length > 8 && !password.includes('PASSWORD')) // ! operator indicates not
{ 
    return true
}
 else {
    return false
}
 }  

console.log(isValidPassword('thesearenotaccESSCrEds932$!@')) // DOESNT CONTAIN password
console.log(isValidPassword('thesearepasswordCrEds23*^$%'))  // does have password
console.log(isValidPassword('thesearePASSWORDCrEds23*^$%')) // Does contain password with caps


// try doing this same challenge but with two statements one for  password and one for PASSWORD \\  --SE