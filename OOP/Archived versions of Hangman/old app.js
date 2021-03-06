
/// Primitives and Objects: Part I \\\

// primitive values: string. number, null, boolean, and undefined
// product --> object.prototype --> null (chain of order ends)

// const product = new Object({
//    name: 'JEST'
// })


// product.name = 'Rest'

// Object.prototype.someNewMethod = () => 'This is the newer function'

// hasOwnProperty A property name Determines whether an object has a property with the specified name. will put out true or false.
// console.log(product.someNewMethod())
// console.log(product)


/// Primitives and Objects: Part II \\\

// primitive values: string. number, null, boolean, and undefined

// object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> object.prototype --> null
// function: myfunc ---> function.prototype --> object.prototype --> null
// String: mystring --> string.prototype --> object.protoype --> null
// number: mynumber --> number.prototype --> object.prototype --> null
// boolean: boolean --> boolean.prototype --> object.prtotype --> null

const product = 'yolo'
console.log(product)

const otherProduct = new String('Phonelogs')
console.log(otherProduct)