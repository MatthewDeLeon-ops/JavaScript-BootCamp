let myAccount = {
    name: 'Matthew',
    expenses: 0,
    income: 0
}
let otherAccount = myAccount
otherAccount.income = 1000
//  create a function that allows us to add an expense.
//  changes in income will only be displayed when we change a property of the function ".income for example"
let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)