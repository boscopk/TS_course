// Utility Types

// Partial

interface Assingment {
    studentId: string,
    title: string,
    grade: string,
    verified?: boolean,
}

const updateAssingment = (assign: Assingment, propsToUpdate: Partial<Assingment>): Assingment => {
    return {
        ...assign,  // Spread operator
        ...propsToUpdate
    }
}

const assignment: Assingment = {
    studentId: '123',
    title: 'Math Assignment',
    grade: 'A',
}

console.log(updateAssingment(assignment, { grade: 'B', verified: true }))


// Required

const recordAssignment = (assign: Required<Assingment>): Assingment => {
    //send to database,etc.
    return assign
}

const assignmentVerified: Readonly<Assingment> = {...assignment, verified: true }

recordAssignment({...assignmentVerified, verified: true})

// Record

const hexColorMap: Record<string, string> = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
}

type Students = 'Alice' | 'Bob' | 'Charlie'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'F'

const finalGrades: Record<Students, LetterGrades> = {
    Alice: 'A',
    Bob: 'B',
    Charlie: 'C',
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Alice: { assign1: 90, assign2: 95 },
    Bob: { assign1: 80, assign2: 85 },
    Charlie: { assign1: 70, assign2: 75 },
}


// Pick and Omit

type AssignResult = Pick<Assingment, 'studentId' | 'grade'>

const score: AssignResult = {
    studentId: '123',
    grade: 'A'
}

type AssignPreview = Omit<Assingment, 'grade' | 'verified'>
const preview: AssignPreview = {
    studentId: '123',
    title: 'Math Assignment',
}

// Exclude and Extract
type AdjustedGrades = Exclude<LetterGrades, 'F' | 'D'>

type HighGrades = Extract<LetterGrades, 'A' | 'B'>

// NonNullable

type AllPossibleGrades = 'Dave' | 'Jhon' | 'Alice' | null | undefined

type NameOnly = NonNullable<AllPossibleGrades>

// ReturnType

//type NewAssign = (title: string, points: number)

const creatNewAssign = (title: string, points: number) => {
    return { title,points }
}

type NewAssign = ReturnType<typeof creatNewAssign>

const tsAssign: NewAssign = creatNewAssign('TypeScript Assignment', 100)
console.log(tsAssign)

// Parameters
type AssignParams = Parameters<typeof creatNewAssign>

const assignArgs: AssignParams = ['Generics', 100]

const tsAssign2: NewAssign = creatNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise

interface User {
    id: string; 
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[] | null> => {
    try {
        // Simulate fetching user data
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = (await response.json()) as User[]
        if (!Array.isArray(data)) {
            throw new Error('Invalid response from API')
        }

        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching user data:', error.message)
        }
        return null;
    }
}


type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => {
    if (users) {
        console.log('Fetched users:', users)
    } else {
        console.log('No users found or an error occurred.')
    }
}).catch(error => {
    console.error('Error in fetchUsers:', error)
})