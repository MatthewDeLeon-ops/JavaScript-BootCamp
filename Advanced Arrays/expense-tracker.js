const account = {
    name: 'Matthew Deleon',
    expenses: [],
    income: [],
    addExpense: function(description_of_charge,amount_owed) {
        this.expenses.push({
            description: description_of_charge,
            amount: amount_owed
        })
    }, 
    getIncome: function(Income, salary){
        this.income.push({
            description: Income,
            amount: salary
        })
    },
    getAccountSummary: function() {
        let Current_accrued_total_Expenses = 1024
        let myIncome = 50000
        let Remainingbalance = 26000

        this.expenses.forEach(function (my_expenses) {
            Current_accrued_total_Expenses = Current_accrued_total_Expenses + my_expenses.amount
        })
        this.income.forEach(function (income) {
            My_Total_Income = myIncome + income.amount  
        })

        Remainingbalance = My_Total_Income - Current_accrued_total_Expenses

    return `${this.name} has an remaining balance of $${Remainingbalance} after taking his yearly income is $${My_Total_Income} and deducting his accrued expenses $${Current_accrued_total_Expenses}.`
    // use two $$ when needing to distinguish a particular variable from another library or variable using only $.
    }
}

account.addExpense('rent in california', 3000)
account.addExpense('coffee in new york', 200)
account.getIncome('Work', 1300)
console.log(account.getAccountSummary()) 



                                            /////////part one \\\\\\\\\

//Prints out the summary of expenses.
//Expense properties -- description (string), amount (number)
// methods below
// create addExpense: takes two arguments -> description for expense, amount ($$) add in new object onto the array with the correct data. -- DONE 
// create getAccountSummary: total up all expenses and print a message like matthew deleon has $1000 in expenses. To calculate cost for each item use the forEach method. - Done



    ////////////////// part two \\\\\\\\\\\\\\\\\\\\

    // 1. ADD income array to account
    // 2. addIncome method -> description, amount
    // 3. Tweak getAccountSummary