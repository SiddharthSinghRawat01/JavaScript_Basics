// how to iterate object
const person = {
    name:"siddharth",
    age: 25,
    "perosn hobbie": [1,2,3,4]
};
// for loop 
// object.keys

// for(let key in person){
//     console.log(key)
// }

// for(let key in person){
//     console.log(person[key])
// }

// for(let key in person){
//     console.log(` ${key} : ${person[key]}`)
// }

// console.log(Object.keys(person));
// type of
// console.log(typeof(Object.keys(person)));

for(let key of Object.keys(person)){
    console.log(person[key])
}