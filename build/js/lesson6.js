"use strict";
class Coder {
    constructor(name, music, age, languages = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.languages = languages;
        this.name = name;
        this.music = music;
        this.age = age;
        this.languages = languages;
    }
    getAge() {
        return this.age;
    }
}
const John = new Coder('Joao', 'Rock', 30);
console.log(John.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLanguages() {
        return this.languages;
    }
}
const Jane = new WebDev('Macbook Pro', 'Jane', 'Pop', 25);
console.log(Jane.getLanguages());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${action} on the ${this.instrument}`;
    }
}
const Eddie = new Guitarist('Eddie Van Halen', 'guitar');
console.log(Eddie.play('solo'));
///////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Jhon = new Peeps('John');
const JaneDoe = new Peeps('Jane Doe');
const Steve = new Peeps('Steve');
console.log(Jhon.id); // 1
console.log(JaneDoe.id); // 2
console.log(Steve.id); // 3
console.log(Peeps.count);
//////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Invalid data. Must be an array of strings.');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Van Halen', 'Metallica', 'Iron Maiden'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Nirvana', 'Pearl Jam'];
console.log(myBands.data);
