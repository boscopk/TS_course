// let stringArr = ['one', 'heey', 'joao']

// let guitars = ['Strat', 'Les Paul', 5150]

// let mixedData = ['EVH', 1984, true]

// stringArr[0] = 'Hello'
// stringArr.push('World')

// guitars[0] = 1000
// guitars.unshift('Yamaha')

// let test = []
// let bands: string[] = []
// bands.push('Van Halen')

// // Tuple
// let myTuple: [string, number, boolean] = ['Joao', 1984, true]

// let mixed = ['Joao', 1984, true]

// myTuple[1] = 42

// // Objects
// let myObj: object
// myObj = []
// console.log(typeof myObj)
// myObj = bands
// myObj = {}

// const exampleObj = {
//     prop1: 'Joao',
//     prop2: true,
//     prop3: 42
// }

// exampleObj.prop1 = 'Joao'
// exampleObj.prop2 = false

// // type Guitarist = {
// //     name: string,
// //     active?: boolean,
// //     albums: (string | number)[]
// // }

// interface Guitars {
//     name: string,
//     good: boolean,
//     tons: (string)[]
// }

// interface Guitarist {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984, 5150, 'OU812']
// }

// let jp: Guitarist = {
//     name: 'Jimmy',
//     albums: ['I', 'II', 'IV']
// }

// let guitar: Guitars = {
//     name: 'Yamaha',
//     good: true,
//     tons: ['Miau', 'Muu', 'Let It Be']
// }

// evh = jp

// const greetGuitar = (guitar: Guitars) => {
//     return `The ${guitar.name.toUpperCase()}, good: ${guitar.good}, number of tons: ${guitar.tons.length}`
// }

// const greetGuitarist = (guitarist: Guitarist) => {
//     return `Hello ${guitarist.name.toUpperCase()}, number of albums: ${guitarist.albums.length}`
// }

// console.log(greetGuitarist(jp));
// console.log(greetGuitar(guitar));

// // Enums
// // Unlike other languages, TypeScript enums are not a new data type, but rather a way to give more friendly names to sets of numeric values.

// enum Grade {
//     U = 1, // Unclassified
//     D, // D for Distinction
//     C, // C for Credit
//     P, // P for Pass
//     F // F for Fail
// }

// console.log(Grade.U); // 1