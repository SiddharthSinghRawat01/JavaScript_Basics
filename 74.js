const user ={
    firstName: "siddharth",
    age: 8,
    about : function(){
        console.log(this.firstName,this.age)
    } 
}

// user1.about();
const myFunc = user.about.bind(user);
myFunc();
