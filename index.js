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
    {id: 1, name: 'Alice', age: 21, husband: 7},
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

const wifeName = 'Alice';
console.log(`Husband of ${wifeName} is ${getHusbandName(wifeName)}`);


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

const husbandName = 'Eugene';
console.log(`Wife of ${husbandName} is ${getWifeName(husbandName)}`);

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
        return Math.abs(item.wife.age - item.husband.age)
    });

    let maxDiff = -Infinity;
    countDifference.forEach((diff) => {
        if (maxDiff < diff) {
            maxDiff = diff;
        }
    })


    return maxDiff;
}

console.log(`Maximum difference between husband and wife: ${getMaxAgeDifference()} years`)


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


const array = [1, 2, 'a', '3', 4, 5, -5, -2]

function filterList(arr) {
    return arr.filter((item) => {
        return typeof item === 'number' && item > 0
    })
}

console.log(`List number: ${filterList(array)}`)

const b = 'abracadabra';
for (let i = 0; i <= str.length; i++) {
    // str[i]
}

// const arr = str.split('');

// console.log(arr)
const arr2 = [1, 2, 3];
arr2.indexOf(2) // => 1 || -1

function isVowel(symbol) {
    const arr = ['a', 'o', 'i', 'e', 'u']
    return arr.indexOf(symbol.toLowerCase()) !== -1
}

console.log('is "I" a vowel? ', isVowel('I'))

function getVowelCount(str) {
    let vowels = str.split('').filter((symbol) => isVowel(symbol))
    return vowels.length
}

function getUniqueVowelsCount() {

}

console.log('vowel count for "abracadabra": ', getVowelCount('abracadabra'));

function solution(str, ending) {
    for (let i = 0; i < ending.length; i++) {
        if (ending[ending.length-1-i] !== str[str.length-1-i]) {
            return false
        }
    }
    return true
}

let string;
let ending;
string = 'abracadebra'
ending = 'dabra'
console.log(`"${string}" -> "${ending}"`, solution(string, ending));


// function DNAStrand1(dna) {
// }
//
// function DNAStrand(dna) {
// }

function DNAStrand(dna) {
    const map = {'A':'T', 'T':'A', 'C':'G', 'G':'C'}

    return dna.split('').map((item) => {
        return map[item] || item
    }).join('')
}

console.log(DNAStrand('AATTGC'))


function makeNegative(num) {
    return num > 0 ? -num : num
}

console.log(makeNegative(5))

function sumTwoSmallestNumbers(numbers) {
    let minNumbers = [Infinity, Infinity]
    numbers.forEach((item) =>{
        console.log('item --> ', item)
        console.log('minNumbers', minNumbers)
        if (item < minNumbers[0]) {
            console.log('replacing min numbers')
            minNumbers[1] = Math.min(minNumbers[0], minNumbers[1])
            minNumbers[0] = item
        } else {

        }
    })
    return minNumbers
}


console.log(sumTwoSmallestNumbers([7, 5, 1, 6, 2, 9, 8]))


function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

const arrPhoneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(createPhoneNumber(arrPhoneNumbers))

function queueTime(customers, n) {
    const checkoutTills = []
    for (let i=0; i<n; i++){
        checkoutTills.push(0)
    }

    customers.forEach(customer => {
        const indexMinCheckoutTills = checkoutTills.indexOf(Math.min(...checkoutTills))
        checkoutTills[indexMinCheckoutTills] += customer
    })

    return Math.max(...checkoutTills)
}

console.log(queueTime([
    { name: 'Alice', time: 2 },
    { name: 'Bob', time: 4 },
    { name: 'Richard', time: 10 }
], [
    { time: 0, merchant: 'Jane Smith' },
    { time: 0, merchant: 'Oliver Cromwell' }
]))

function towerBuilder(n) {
    const tower = []
    for (let i = n - 1; i>0 ; i--) {
        const space = Array.from({length: n - i - 1 }, () => ' ' ).join('');
        const asterix = Array.from({length: 1 + 2 * i }, () => '*').join('');
        tower.push(`${space}${asterix}${space}`)
    }

    for (let j = 0; j < n; j++) {
        const space = Array.from({length: n - j - 1}, () => ' ' ).join('');
        const asterix = Array.from({length: 1 + 2 * j}, () => '*').join('');
        tower.push(`${space}${asterix}${space}`)
    }
    return tower
}

console.log(JSON.stringify(towerBuilder(5), null, '\n'));


function inArray(array1,array2){
    return array1.filter( str => array2.join(' ').includes(str) ).sort();
}

const a1 = ["arp", "strong", "live", 'xyz']
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArray(a1, a2))


function partsSums(ls) {
    let sum = ls.reduce((sum, item) => sum + item, 0);
    return ls.map((item) => {
        const current = sum;
        sum -= item;
        return current
    }).concat(0);

}
console.log(partsSums([1,2,3,4,5,6]))

function digital_root(n) {
    let number = n;
    while (number > 9) {
        number = number.toString().split('').reduce((prev, item) => {
            return prev + +item
        }, 0)
    }
    return number
}

console.log(digital_root(751))

// Return the output array, and ignore all non-op characters
function parse( data ) {

}




//************* Асинхронность **************************************
function request(err, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (err)
                reject(err)
            else
                resolve(data);
        }, 2000)
    })
}


// const r1 = request(null, 1);
// r1.then((data) => {
//     console.log('request1 data', data);
//     return request(null, 2);
// }).then((data2) => {
//     console.log('request1 data2', data2);
//     if (data2 === 2) {
//         return request(null, 3)
//     }
//     return data2;
// }).then((data3) => {
//
// })

function time(start) {
    return Math.round((Date.now() - start) / 1000)
}

(async function() {
    const start = Date.now();
    const p1 = request(null, 23)
    // console.log('line 419', time(start)); // 0
    const p2 = request(null, 45)
    // console.log('line 421', time(start)); // 0
    const r1 = await p1;
    // console.log(r1, time(start));         // 2
    const r2 = await p2;
    // console.log(r2, time(start));         // 2
})() //1







