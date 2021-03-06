// Take the series of gpa's listed above and create a function that  
// identifies bad and good gpa's 
//  optional advanced: add in a function that lists the best and worst gpa's

// GPA's: 3.4, 1.3, 4.4,1.9, 2.7, 3.7,3.6, 1.5, 3.1,2.4

let gpa_calculator = function(gpa,possible_gpa) {
    let gradepointaverage = (gpa / possible_gpa)
if (gradepointaverage >= 4.0)
    return `You have an excellent GPA (${gradepointaverage}) congratulations!`
if (gradepointaverage > 3.5)
    return `You have a pretty great GPA (${gradepointaverage}) be proud`
if (gradepointaverage < 2.0)
    return `You have a very poor GPA (${gradepointaverage}) and maintaining college attendance is at stake!!!`
}

let result = gpa_calculator(4, 4)
console.log(result)





//  bonus function create the average function of the grade 