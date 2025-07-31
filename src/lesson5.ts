type One  = string
type Two  = string | number
type Three = 'Hello'

// Convert to more or less specific types
let a: One = 'Hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One> 'World'
let e = <string | number> 'World'

const addOrConcat = (a: number, b: number, c: 'add'| 'concat'): 
string | number => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// Be careful! TS sees no problem here, but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number


// The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src