// challenge area 1 " my solution" -- object-functions
// create function that passes in fahrenheit and returns the temperature converted into celcius, and kelvin

let fahrenheit = 74
let temperature_scale = {
    celcius: (fahrenheit - 32) * (5/9),
    kelvin: (fahrenheit + 459.67) * 5/9
}
let getScales = function (temperature) {
    return {
        temperatures: `${temperature.celcius}, and ${temperature.kelvin}, and ${temperature.fahrenheit}`
    }
}

let temperatureSummary = getScales(temperature_scale)
console.log(temperatureSummary)

// expense tracker challenge

// ______________________________________
// Missed the reset part of the challenge
// --------------------------------------

let TargetAccount = { //defining the object
    Name: 'Matthew Garcia',
    expenses: 0,
    income: 0
}
let addIncome = function(account,amount) {
    account.income = account.income + amount //Great
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount // Great
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.Name} still has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(TargetAccount, 2000)
addExpense(TargetAccount, 150)
addExpense(TargetAccount, 600)

console.log(getAccountSummary(TargetAccount))
