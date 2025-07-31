"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssingment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assignment = {
    studentId: '123',
    title: 'Math Assignment',
    grade: 'A',
};
console.log(updateAssingment(assignment, { grade: 'B', verified: true }));
// Required
const recordAssignment = (assign) => {
    //send to database,etc.
    return assign;
};
const assignmentVerified = Object.assign(Object.assign({}, assignment), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignmentVerified), { verified: true }));
// Record
const hexColorMap = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
};
const finalGrades = {
    Alice: 'A',
    Bob: 'B',
    Charlie: 'C',
};
const gradeData = {
    Alice: { assign1: 90, assign2: 95 },
    Bob: { assign1: 80, assign2: 85 },
    Charlie: { assign1: 70, assign2: 75 },
};
const score = {
    studentId: '123',
    grade: 'A'
};
const preview = {
    studentId: '123',
    title: 'Math Assignment',
};
// ReturnType
//type NewAssign = (title: string, points: number)
const creatNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = creatNewAssign('TypeScript Assignment', 100);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = creatNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Simulate fetching user data
        const response = yield fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (yield response.json());
        if (!Array.isArray(data)) {
            throw new Error('Invalid response from API');
        }
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching user data:', error.message);
        }
        return null;
    }
});
fetchUsers().then(users => {
    if (users) {
        console.log('Fetched users:', users);
    }
    else {
        console.log('No users found or an error occurred.');
    }
}).catch(error => {
    console.error('Error in fetchUsers:', error);
});
