// arrow function

const user ={
    firstName: "siddharth",
    age: 8,
    about : ()=>{
        console.log(this.firstName,this.age)
    } 
}

user.about.call(user);