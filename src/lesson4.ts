//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist2 = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal Types
let myOtherName: 'Bosco'

let userName: 'Joao' | 'Jimmy' | 'Eddie'
userName = 'Jimmy'

// Functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello World')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): 
number {
    return c - d
}

logMsg(subtract(10, 5))

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (x, y) {
    return x * y
}

logMsg(multiply(5, 10))

// Optional Parameters
const addAll = (a: number, b: number, c?: number): 
number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// Default Parameters
const sumAll = (a: number = 10, b: number, c: number = 2): 
number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

// Rest Parameters
const total  = (a: number, ...nums: number[]): 
number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// Custom Type Guards
const isNumber = (value: any): boolean => {
    return typeof value === 'number' 
    ? true : false
}

// Using the never type
const numberOrString = (value: string | number): 
string => {
    if (typeof value === 'string') {
        return `String: ${value}`
    } else if (isNumber(value)) {
        return `Number: ${value}`
    } 
    return createError('This should never happen')
}