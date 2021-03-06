//  function: add Income to the account, This will take the account to manipulate which is the account are we trying to add income for and take the amount of income we are trying to add. - done

// function resetAccount: Going to reset expenses and income to 0 using an argument to point the account to reset.

//  function getaccountSummary: print an summary of the account includes //current account balance, total, //expenses, //income

// function For example account for matt has $900. 1000 in income. $100 in expenses.


// functional layout
// ______________________________________________
// add income - done
// add expense - done
// getaccountsummary
// reset account
// get account summary


let TargetAccount = {
    Name: 'Matthew Deleon',
    expenses: 0,
    income: 0
}
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
        account.expenses = 0
        account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.Name} still has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(TargetAccount, 2000)
addExpense(TargetAccount, 150)
addExpense(TargetAccount, 600)

console.log(getAccountSummary(TargetAccount))
resetAccount(TargetAccount)
console.log(getAccountSummary(TargetAccount))

f
