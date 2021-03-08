const data = {
    locations: [],
    get location() {
        // return 'this is a test of a getter'
        return this._location
        // returns the new value of Utah with the spaces removed via trim.
    },
    set location(value) {
        this._location = value = value.trim() // -- saves the data
        this.locations.push(this._location)
    }
}

// code that uses the data object
data.location = 'Utah'
data.location = 'New York'
console.log(data)

// Getters and setters are super useful for situations where you need to customize the behavior of an object.