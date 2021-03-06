const { aquamarine } = require("color-name");

const getTip = (amount) => {
    if (typeof amount === 'number') {
    return amount * .25
} else {
    throw Error ('Argument must be an number')
    }
}

try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}