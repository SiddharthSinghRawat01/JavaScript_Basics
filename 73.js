// call,apply and bind
// call
let about= function(hobby,game){
    console.log(this.firstName,this.age,this.hobby,this.game)
} 
const user ={
    firstName: "siddharth",
    age: 8,
    
}

const user1 ={
    firstName: "hind",
    age: 9
}

about.apply(user1,["123","sid"]);

//bind wath in video
