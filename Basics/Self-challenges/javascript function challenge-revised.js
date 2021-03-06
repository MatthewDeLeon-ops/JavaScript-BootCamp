// Take the series of gpa's listed above and create a function that identifies bad and good gpa's.
// GPA's: 3.4, 1.3,1.9, 2.7, 3.7,3.6, 1.5, 3.1,2.4,2.2,1.4
//  optional advanced: add in a function that lists the best and worst gpa's of the lot.


let gpa_calculator = function(gpa,max_gpa) {
    let score = (gpa / max_gpa)
    if (score > 0.75 && score <= 1.0)
        return `You have an very good GPA ${gpa} out of a maximum of ${max_gpa} congratulations!`
        // GPA Range 3.1 -> 4.0 
    else if (score >0.50 && score <= 0.75) 
        // GPA Range 2.0 -> 3.0 
        return `You have an decent GPA of ${gpa} out of a maximum of ${max_gpa} be proud of your hard work but there is still room to improve.`
    else if (score >0.25 && score <= 0.50)
    // GPA Range 1.0 -> 2.0 
        return `You have a poor GPA of ${gpa} out of a maximum of ${max_gpa} but if keep working harder on your courses your gpa will improve :) !`
    else 
        return `you have a dangeropusly low gpa of ${gpa} and may consider a different degree or break from college!`
}
let result = gpa_calculator(3.1, 4.0)
console.log(result)

//  optional advanced: add in a function that lists the best and worst gpa's of the lot.

//  select range of GPA'S
//  function to filter the selected range of gpa's with a classification methodology

// let gpa_filter = function filter(gpa_values) {
var values = ['3.4', '1.3' , '1.9', '2.7', '3.7', '3.6', '1.5', '3.1','2.4','2.2', '1.4']
values.sort(); // Sorts the list of grade values

console.log([...values]) // prints the sorted list of gpa 

// completed grabbed the list of values sorted now i need to add the conditions to list them with comments. 

