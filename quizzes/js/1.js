// https://www.w3resource.com/javascript-exercises/
// What wil be logged to the console?

var a = ['dog', 'cat', 'hen']
a[100] = 'fox'

console.log(a.length)
console.log(a[99])


//https://jsisweird.com/

const result = true + false

console.log(result)
// Why?

const result = [, , ,].length

console.log(result)
// Why?


const result = [1, 2, 3] + [4, 5, 6]

console.log(result)
// Why? - How + operand works?



const result = 0.2 + 0.1 === 0.3

console.log(result)
// Why? - 0.2 + 0.1 is 0.30000000000000004?



const result = !!""

console.log(result)
// That's expected :)


const result = +!![]

console.log(result)
// That's expected :)


const result = !!!true

console.log(result)
// That's expected :)


const result = true == "true"

console.log(result)
// Why?



const result = 010 - 03

console.log(result)
// Why? - What happens if you put 0 in front of a number?


const result = false * 2

console.log(result)
// That's expected :)


const result = null + 0

console.log(result)
// That's expected :)


const result = 0/0

console.log(result)
// Why? - When NaN?


const result = 1/0 > Math.pow(10, 1000)

console.log(result)
// Why? - NaN greater than gives false?


const result = true++

console.log(result)
// That's expected :)


const result ="" - 1

console.log(result)
// That's expected :)


const result =(null - 0) + "0"

console.log(result)
// How + operand works?



const result =true + ("true" - 0)

console.log(result)
// Why? - When NaN? I'd say it's "2"


const result =!5 + !5

console.log(result)
// That's expected :) false + false gives 0


const result =[] + []

console.log(result)
// How + operand works?


const result =NaN === NaN

console.log(result)
// Why? Because both are objects, but are not equal by reference?

const result =+Infinity === -Infinity

console.log(result)
// What's Infinity?


const result =undefined === undefined

console.log(result)
//Why - there is one undefined reference?


const result =+0 === -0

console.log(result)
// What are +0 and -0?



const result =!!"JS is weird"

console.log(result)
// That's expected, it's not an empty string.