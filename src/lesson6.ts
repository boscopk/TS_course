class Coder {

    secondaryLanguage!: string

    constructor(
        public readonly name: string,
        public music: string, 
        private age: number,
        protected languages: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.languages = languages
    }

    public getAge() {
        return this.age
    }
}

const John = new Coder('Joao', 'Rock', 30)
console.log(John.getAge())

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLanguages() {
        return this.languages
    }
}

const Jane = new WebDev('Macbook Pro', 'Jane', 'Pop', 25)
console.log(Jane.getLanguages())


/////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    constructor(
        public name: string,
        public instrument: string
    ) {}

    play(action: string) {
        return `${this.name} plays ${action} on the ${this.instrument}`
    }
}

const Eddie = new Guitarist('Eddie Van Halen', 'guitar')
console.log(Eddie.play('solo'))

///////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const Jhon = new Peeps('John')
const JaneDoe = new Peeps('Jane Doe')
const Steve = new Peeps('Steve')


console.log(Jhon.id) // 1
console.log(JaneDoe.id) // 2
console.log(Steve.id) // 3
console.log(Peeps.count)

//////////////////////////

class Bands{
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
            this.dataState = value
            return
        } else {
            throw new Error('Invalid data. Must be an array of strings.')
        }
    }
}

const myBands = new Bands()
myBands.data = ['Van Halen', 'Metallica', 'Iron Maiden']
console.log(myBands.data)
myBands.data = [...myBands.data, 'Nirvana', 'Pearl Jam']
console.log(myBands.data)