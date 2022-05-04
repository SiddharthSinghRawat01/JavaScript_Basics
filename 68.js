// maps
// it diffrent from map method of array

// map is iterabel

//store data in orderd fasion

// store key value pair(like object)
// duplicate keys are not allowed like objects

//different between maps and object

//objects can only hve string or symbol
//as key

// in maps you can use anything as key 
// like array, numbers, string

// const person = {
//     firstName : "harshit",
//     age: 7
// }
// console.log(person.firstName)
// console.log(person["firstName"])

const person = new Map();
person.set('firstname','Harshit')
person.set('age',7)
person.set('1',7)
console.log(person.keys())

for(let key of person.keys()){
    console.log(key,typeof key)
}