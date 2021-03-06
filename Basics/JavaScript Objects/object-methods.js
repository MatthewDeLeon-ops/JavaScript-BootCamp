 // seatParty takes the party size and adds it to guest count
// removeParty takes the party size and subtracts it from guest count
// Usage
let resturant = {
    name: 'Myself',
    guestCapacity: 77,
    guestCount: 0,
    checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount // takes the guest capacity and subtracts the current guest count to identify the amount of seats left.
        return partySize <= seatsLeft // Tells you true/false based on the amount of seats left. 
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount +partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
 }

resturant.seatParty(76) 
console.log(resturant.checkAvailability(4))// create the code to make this function work
resturant.removeParty(5)
console.log(resturant.checkAvailability(4))