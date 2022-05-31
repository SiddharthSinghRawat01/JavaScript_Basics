// method:function inside object
function personInfo(){
    console.log(`person name is ${this.firstName} and ${this.age} is`);
}
const person = {
    firstName : 'siddharth',
    age: 8,
    about: personInfo
}


const person2 = {
    firstName : 'sat',
    age: 85,
    about: personInfo
}

const person3 = {
    firstName : 'sam',
    age: 5,
    about: personInfo
}
person2.about(); 

