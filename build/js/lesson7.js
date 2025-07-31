"use strict";
// Index Signatures
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions['Pizza']);
let prop = 'Pizza';
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
const student = {
    name: 'John',
    GPA: 3.5,
    classes: [100, 200]
};
//console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // Accessing properties using index signature
}
Object.keys(student).map(key => {
    console.log(`${key}: ${student[key]}`); // Accessing properties using index signature
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`); // Accessing properties using index signature
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 3000,
    bonus: 500,
    sidehustle: 200
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]); // Accessing properties using index signature
}
