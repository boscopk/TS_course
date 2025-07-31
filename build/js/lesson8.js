"use strict";
const echo = (arg) => arg;
const isObject = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObject(true));
console.log(isObject('Jhon'));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'Jhon' }));
console.log(isObject(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false
        };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return {
            arg,
            is: false
        };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
const checkBookValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false
        };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return {
            value: arg,
            is: false
        };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    console.log(`Processing user with ID: ${user.id}`);
    return user;
};
console.log(processUser({ id: 1, name: 'Jhon' }));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    { id: 1, name: 'Jhon', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Steve', age: 40 },
];
console.log(getUsersProperty(usersArray, 'name'));
console.log(getUsersProperty(usersArray, 'age'));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    getState() {
        return this.data;
    }
    setState(value) {
        this.data = value;
    }
}
const store = new StateObject('Jhon');
console.log(store.getState());
const myState = new StateObject([42]);
myState.setState(['Alice', 30, true]);
console.log(myState.getState());
