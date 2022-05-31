// short syntax

// const user ={
//     firstName: "siddharth",
//     age: 8,
//     about : function(){
//         console.log(this.firstName,this.age)
//     } 
// }

// or

const user ={
    firstName: "siddharth",
    age: 8,
    about(){
        console.log(this.firstName,this.age)
    } 
}
user.about();
