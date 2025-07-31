// Index Signatures

// interface TransactionObj {
//     readonly [index: string]: number // Index signature allows any string key with a number value
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number,
}

const todayTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todayTransactions.Pizza)
console.log(todayTransactions['Pizza'])

let prop: string = 'Pizza'

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todayTransactions))

///////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined // Index signature allows any string key with value of type string, number, number[] or undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student : Student = {
    name: 'John',
    GPA: 3.5,
    classes: [100, 200]
}

//console.log(student.test)

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) // Accessing properties using index signature
}

Object.keys(student).map(key => {
    console.log(`${key}: ${student[key as keyof typeof student]}`) // Accessing properties using index signature
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`) // Accessing properties using index signature
}

logStudentKey(student, 'name');

/////////////////////////////////

// interface Incomes {
//     [key: string]: number // Index signature allows any string key with a number value
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 3000,
    bonus: 500,
    sidehustle: 200
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]) // Accessing properties using index signature
}