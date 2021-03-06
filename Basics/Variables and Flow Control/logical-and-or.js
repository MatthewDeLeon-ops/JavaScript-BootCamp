let temp = 55

// logical and Operator - true if both sides are true. False otherwise
// logical or Operator - True if at least one side is true. False otherwise.
if (temp >= 60 && temp <= 90) {  // & is the logical and operator.
    console.log('it is pretty nice outside')
}

else if (temp <= 0 || temp >= 120) { // || is the logical or operator
    console.log('It is dangerous outside. Dont do it')
}
else {
    console.log('its nice weather to go out.')
}

//Challenge area: Resturant reservation

// let isguestonevegan = true
//  letusguesttwovegan = false

// are both vegan, offer only vegan dishes.
// at least one vegan, offer a mixture of dish options.
//  else, offer up anything on the menu.


// MY ORIGINAL ANSWER\\ This is an alternative answer just not as automated.
var guest1 = "vegan";
var guest2 = "vegan";
var guest1 = false;
var guest2 = false;

if (guest1 === true && guest2 === false) {
    console.log('chef offers guests a mixture of dish options.')
} else if (guest1 === true && guest2 === true) {
    console.log(' The chef offers the guest vegan dishes' )
} else {console.log('Offer the guest any dishes on the menu')
}

// A REVISED ANSWER BASED ON HIS ANSWER.
var Veganguest1 = false;
var Veganguest2 = true;
if (Veganguest1 && Veganguest2) {
    console.log('The chef offers the guest vegan dishes')
} else if (Veganguest1 || Veganguest2) {
    console.log('chef offers guests a mixture of dish options' )
} else {console.log('Offer the guest any dishes on the menu')
}

// Professor Andrew's Solution \\ :) 
let isguestonevegan = false
let isguesttwovegan = false

if (isguestonevegan && isguesttwovegan) {
    console.log(' The chef offers the guest vegan dishes' )
} else if (isguesttwovegan || isguesttwovegan) {
    console.log('chef offers guests a mixture of dish options.')
} else {
    console.log('Offer the guest any dishes on the menu')
}