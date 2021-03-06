
const myage = 20
const showPage = () => {
    return('showing page')
}

const showErrorPage = () => {
    return 'showing the error page'
}
const message = myage >= 21 ? showPage() : showErrorPage()
console.log(message) 


//  print team size 3 if less than or equal to 4
// print too many people on my team otherwise
const team  = ['tyler','porter', 'Johanna','Jacky','maddie'] 
console.log(team.length <=4 ? `Team Size: ${team.length} `: 'To many team players')


// integrate conditional operator into the todo function file
// if statement with else clause use the return with the turnary operator in the todo and notes function files
// lines 5 - 10