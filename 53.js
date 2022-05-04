// param destructiong

// object
// react

const person = {
    firstName: "siddharth",
    gender: "male"
}

// function getDetails(obj){
//     console.log(obj.firstName)
//     console.log(obj.gender)
// }

function getDetails({firstName,gender,age}){
    console.log(firstName)
    console.log(gender)
    console.log(age)
}

getDetails(person)