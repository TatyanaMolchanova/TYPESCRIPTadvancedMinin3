// const cars: string[] = ['Ford', 'Aude']
// const cars2: Array<string> = ['Ford', 'Audi']

//const promise: Promise<number> = new Promise<number>(resolve => {
//     setTimeout(() => {
//         resolve(32)
//     }, 2000)
// })

// promise.then(data => {
//     console.log(data.toFixed())
// })

// function mergeObject(a: object, b: object) {
//     return Object.assign({}, a, b)
// }

function mergeObject<T extends object, R extends object>(a: T, b: R): T & R{
    return Object.assign({}, a, b)
}

const merged = mergeObject({name: 'Vladilen'}, {age: 26})
console.log(merged.age)
const merged2 = mergeObject({model: 'Ford'}, {year: 2010})

// const merged3 = mergeObject({a: 1}, 'bbb')
// console.log(merged3)

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

// console.log(withCount('Привет Typescript'))
// console.log(withCount(['I', 'am', 'array']))
// console.log(withCount(20))
// console.log(withCount({length: 20}))

// =================

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//     return obj[key]
// }

// const person = {
//     name: 'Vladilen',
//     age: 26,
//     job: 'Javascript'
// }
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))

// ==========================

class Collection<T extends number | string | boolean> {
    // private _items: T[] = []

    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

// const strings = new Collection(['I', 'Am', 'Strings'])
// const strings = new Collection<string>(['I', 'Am', 'Strings'])
// strings.add('!')
// strings.remove('Am')
// console.log(strings.items)

// const numbers = new Collection<number>([1, 2, 3])
// numbers.add(4)
// numbers.remove(2)
// console.log(numbers.items)

// const objs = new Collection([{a:1}, {b: 2}])
// objs.remove({b: 2})
// console.log(objs.items)


// https://www.youtube.com/watch?v=7NU6K4170As&t=46s 70:10

// ================

interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

/////// 

// const cars: Array<string> = ['Ford', 'Aude']
// cars.shift()

const cars: Readonly<Array<string>> = ['Ford', 'Aude']
// cars.shift()
cars[1]

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}

// ford.model = 'Ferrary'