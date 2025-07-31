let myName: string;
let myAge: number;
let isLoading: boolean;
let album: string | number;

myName = 'Joao'
myAge = 30
isLoading = true
album = 'Revolver'

const sum = (a: number, b: string) => {
    return a + b
}

let postId: string | number = 1234
let isActive: boolean | number = false

let re: RegExp = /ab+c/gi

console.log(myName, myAge, isLoading, album);