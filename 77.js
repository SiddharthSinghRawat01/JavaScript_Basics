
// const user ={
//     firstName: "siddharth",
//     lastName: "Rawat",
//     email: "jakfls",
//     age: 8,
//     about(){
//        return `${this.firstName} is ${this.age}`
//     },
//     is18: function(){
//         return this.age >= 18
//     } 
// }

// function( that function create object)
// 2.) add key value pair
// 3.) object ko return karega

function createUser(firstName,lastName,email,age ,about){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName
    user.email = email
    user.age = age
    user.about = function(){
        return `${this.firstName} is ${this.age}`
     },
     user.is18 = function(){
        return this.age >= 18
     }
     return user

}
 
const user1 = createUser('sid','raawat','salkfd',9)
console.log(user1);

const is18 = user1.is18()
console.log(is18)

console.log(user1.about())