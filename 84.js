// new keyword
function CreateUser(firstName,lastName,email,age ,about){
    this.firstName = firstName;
    this.lastName = lastName
    this.email = email
    this.age = age
  
  }
  
  const user1 = new CreateUser('sid','raawat','salkfd',9)
  const user2 = new CreateUser('id','raawat','salkfd',95)
  const user3 = new CreateUser('sid+klk','raawat','salkfd',19)
  
//   console.log(user2.about());

CreateUser.prototype.about = function(){
          return `${this.firstName} is ${this.age}`
       }

CreateUser.prototype.is18 = function(){
    return this.age >= 18
 }

   console.log(user1.about());

   for(let key in user1){
    //    console.log(key);
    // if you dont want prototype keys
    // console.log(user1.hasOwnProperty(key))
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
   }