const number = 3; // NaN
const str = '3';
const obj = {foo: 'bar'}
const bool = true;
const undef = undefined;
const arr = [1,2,3]; // object // Array.isArray

const nullValue = null;

const bigInt = BigInt(0x123);
const symbol = Symbol('asd');

number == str // true
number === str // false

/**
 * Returns true if input object is plain object
 * @param {Object} obj
 * @return {Boolean}
 */

// instanceof

function isObject(obj) {
    return typeof obj === "object" && !Array.isArray(obj) && obj !== null && !(obj instanceof Date)}
// }
//
// // IT SHOULD RETURN 8!!!
// function fn() {
//     return (2 + 2) * 2
// }
//
// class Animal {
//     consructor() {
//         this.sound = 'unknown';
//     }
//
//     bow() {
//         console.log(this.sound);
//     }
// }
//
// const animal = new Animal();
// console.log(animal)
// animal.bow();
//
// console.log('Expect {a: \'123\'} to be true: ', isObject({a: '123'}))
// console.log('Expect 123 to be false: ', isObject(123))
// console.log('Expect 0 to be false: ', isObject(0))
// console.log('Expect null to be false: ', isObject(null))
// console.log('Expect [1,2,3] to be false: ', isObject([1,2,3]))
// console.log('Expect \'123\' to be false: ', isObject('123'))
// console.log('Expect \'string\' to be false: ', isObject('string'))
// console.log('Expect {} to be true: ', isObject({}))
// console.log('Expect undefined to be false: ', isObject(undefined))
// console.log('Expect new Date() to be false: ', isObject(new Date()))
// console.log('Expect new Animal() to be false: ', isObject(animal))

const people = [
    {id: 1, name: 'Alice', age: 23, husband: 7},
    {id: 2, name: 'Bob', age: 27 },
    {id: 3, name: 'Charles', age: 52 },
    {id: 4, name: 'Diana', age: 40, husband: 2},
    {id: 5, name: 'Eugene', age: 31 },
    {id: 6, name: 'Franciska', age: 20, husband: 5 },
    {id: 7, name: 'George', age: 18},
]

const getAverageAge = function () {
    if (people.length === 0) {
        return 0
    }
    const sum = people.reduce((total, person) => {
        return total + person.age
    }, 0)
    return sum / people.length
}

console.log('avg age', getAverageAge())
//
// const getPersonAge = (name) => {
//     let person= people.find((item) => {
//         return item.name === name;
//     });
//     return person ? person.age : null;
// }
//
// console.log(getPersonAge('Bob'))
// console.log(getPersonAge('George'))
// console.log(getPersonAge('Alex'))

// function getPersonByID(id) {
//     const  user = people.find((item) => {
//         return item.id === id
//     })
//     return user
// }

function getHusbandName(wifeName) {
    let person = people.find((item) => {
        return item.name === wifeName
    })
    console.log('person', person)
    let husband = people.find((item) => {
        return person.husband === item.id
    })
    console.log('husband', husband)
    return husband.name;
}
console.log(getHusbandName('Diana'))

function getWifeName(husbandName) {
    let person = people.find((item) => {
        return item.name === husbandName
    })
    let wife = people.find((item) => {
        return person.id === item.husband
    })
    return wife.name;
}
console.log(getWifeName('George'))

// { male: 4, female: 3 }
function getGenderStats(arr) {
    let femaleAll = []

}




// макс разница между мужем и женой
// function getMaxAgeDifference()





