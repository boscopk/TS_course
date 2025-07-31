const echo = <T>(arg:T): T => arg

const isObject = <T>(arg:T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObject(true))
console.log(isObject('Jhon'))
console.log(isObject([1, 2, 3]))
console.log(isObject({ name: 'Jhon' }))
console.log(isObject(null))

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false
        }
    }
    if (isObject(arg) && !Object.keys(arg as keyof T).length) {
        return {
            arg,
            is: false
        }
    }
    return {arg,is: !!arg}
}

console.log(isTrue(false))

interface BoolCheck<T> {
    value: T
    is: boolean
}

const checkBookValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false
        }
    }
    if (isObject(arg) && !Object.keys(arg as keyof T).length) {
        return {
            value: arg,
            is: false
        }
    }
    return {value: arg,is: !!arg}
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    console.log(`Processing user with ID: ${user.id}`)
    return user
}

console.log(processUser({ id: 1, name: 'Jhon' }))


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    { id: 1, name: 'Jhon', age: 30 },
    { id: 2, name: 'Jane', age: 25 },   
    { id: 3, name: 'Steve', age: 40 },
]

console.log(getUsersProperty(usersArray, 'name'))
console.log(getUsersProperty(usersArray, 'age'))

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    getState(): T {
        return this.data
    }

    setState(value: T): void {
        this.data = value
    }
}

const store = new StateObject('Jhon')
console.log(store.getState())

const myState = new StateObject<(string | number | boolean)[]>([42])
myState.setState(['Alice', 30, true])
console.log(myState.getState())