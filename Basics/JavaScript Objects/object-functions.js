let myBook = {  // how to define a object
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = { 
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
     return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
     }
}

let bookSummary=getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)

// challenge area 1 " my solution"
// create function that passes in fahrenheit and returns the temperature converted into celcius, and kelvin
let temperature_scaling = function(fahrenheit)
{
    return {
        fahrenheit: `${fahrenheit}`, 
        celcius: `${(fahrenheit - 32) * ( 5 / 9 )}`,
        kelvin: `${(fahrenheit + 459.67) * ( 5 / 9)}`
    }
}
let temperatures = temperature_scaling(74)
console.log(temperatures)

//  Instructor Mead Solution
let convertfahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celcis: (fahrenheit - 32) * ( 5 / 9),
    }
}
 
let temps = convertfahrenheit(75)
console.log(temps)