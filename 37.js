// diffrence between dot and bracket notation
const key = "email"
const person = {
    name:"siddharth",
    age: 25,
    "perosn hobbie": [1,2,3,4]
};
//we cant write in dot notation for space in between
//console.log(person.person hobbie); incorrect
console.log(person["perosn hobbie"]); //correct

// person.key = "@gmail"  ans
// {name: 'siddharth', agincorrecte: 25, perosn hobbie: Array(4), key: '@gmail'}

person[key] = "@gmail"

console.log(person)

