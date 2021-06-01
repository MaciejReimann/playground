// TS has a number of built-in types:

let isPresent: boolean = false
let magic: number = 66.6
let hello: string = 'world'

let notDefined: undefined = undefined
let notPresent: null = null

let penta: symbol = Symbol('star')
let biggy: bigint = 24n

// As far as JS spec goes, everything else is an object

let car = {
    manufacturer: 'ford',
    model: 'mustang',
}

let person = {
    name: 'John',
    age: '23',
}

let iTakeNonPrimitivesOnly: object

iTakeNonPrimitivesOnly = person // Allowed
iTakeNonPrimitivesOnly = car // Allowed
iTakeNonPrimitivesOnly = magic // Not allowed
iTakeNonPrimitivesOnly = hello // Not allowed

const objectToValue = new WeakMap()
objectToValue.set(car, 50000)
objectToValue.set(person, Infinity)

objectToValue.set(456, 123)
// Primitive data types as keys are not allowed, can be of type Object only

// WeakMaps can be particularly useful constructs when mapping keys ato information
// about the key that is valuable only if the key has not been garbage collected.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
