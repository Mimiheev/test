const number = 3; // NaN
const str = '3';
const obj = {foo: 'bar'}
const bool = true;
const undef = undefined;
const arr = [1, 2, 3]; // object // Array.isArray

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
    return typeof obj === "object" && !Array.isArray(obj) && obj !== null && !(obj instanceof Date)
}

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
    {id: 2, name: 'Bob', age: 27},
    {id: 3, name: 'Charles', age: 52},
    {id: 4, name: 'Diana', age: 40, husband: 2},
    {id: 5, name: 'Eugene', age: 31},
    {id: 6, name: 'Franciska', age: 20, husband: 5},
    {id: 7, name: 'George', age: 18},
]

let pairs = []
people.forEach(p => {
    if (!p.husband) {
        return
    }
    pairs.push({
        wife: p,
        husband: people.find(husband => husband.id === p.husband)
    })
})
// console.log('1', pairs)

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
    let wife = people.find((item) => {
        return item.name === wifeName
    })
    if (!wife) return null
    let husband = people.find((item) => {
        return wife.husband === item.id
    })
    return husband ? husband.name : null;
}

// const wifeName = 'Alice';
// console.log(`Husband of ${wifeName} is ${getHusbandName(wifeName)}`);


function getWifeName(husbandName) {
    const husband = people.find((item) => {
        return item.name === husbandName
    });
    console.log('husbandName', husband)
    if (!husband) return null;
    const wife = people.find((item) => {
        return husband.id === item.husband
    });
    console.log('wife', wife)
    return wife ? wife.name : null;
}

console.log('1' + getWifeName('George'))
// const husbandName = 'Eugene';
// console.log(`Wife of ${husbandName} is ${getWifeName(husbandName)}`);

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

// { male: 4, female: 3 }
function getGenderStats(arr) {
    return arr.reduce(({males, females}, person) => {
        person.husband ? females++ : males++
        return {males, females}
    }, {males: 0, females: 0});
}

console.log(getGenderStats(people))

// макс разница между мужем и женой
function getMaxAgeDifference() {
    const wives = people.filter((item) => {
        return item.husband
    })

    const pairs = wives.map((wife) => {
        if (!wife.husband) return null;
        const husband = people.find((person) => {
            return person.id === wife.husband
        });
        return husband ? {wife, husband} : null
    }).filter(pair => pair);

    const countDifference = pairs.map((item) => {
        return {
            ...item,
            difference: Math.abs(item.wife.age - item.husband.age)
        }
    });

    countDifference.sort((a, b) => {
        return  b.difference - a.difference
    });


    return countDifference[0].difference
}



console.log('Maximum difference between husband and wife:', getMaxAgeDifference(), 'years')


function testVariables() {
    // var var2;
    // console.log(var3)
    // console.log('hoisted var1', var1)
    // console.log('hoisted var2', var2)
    // const var1 = 10;
    // var2 = 20;
    // console.log('var1', var1)
    // console.log('var2', var2)
}

