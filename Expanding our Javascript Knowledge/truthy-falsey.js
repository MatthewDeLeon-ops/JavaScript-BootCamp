const products = [{name: 'Computer mouse'}]
const product = products[0]

// truthy  -- values that resolve to true in a boolean context
// Falsey -- values that resolve to false in boolean context
// falsy values - false, 0 , empty string, null , undefined

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}