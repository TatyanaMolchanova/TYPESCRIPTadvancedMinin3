"use strict";
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: 'Vladilen' }, { age: 26 });
console.log(merged.age);
const merged2 = mergeObject({ model: 'Ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford', 'Aude'];
cars[1];
const ford = {
    model: 'Ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map