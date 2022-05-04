// object are reference type
// arrays are good but not sufficent
// for real world data
// objects store key value pairs
// object don't have index

//how tocreate objects

const person = {
    name:"siddharth",
    age: 25,
    hobbie: [1,2,3,4]
};
console.log(person);

// how to acess property
console.log(person.name);
console.log(person.hobbie);
console.log(person["name"]);

// how to add new key value pair
person.gender = "male";
console.log(person);