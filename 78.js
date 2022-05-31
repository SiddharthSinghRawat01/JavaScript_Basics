
const userMethod = {
  about : function(){
    return `${this.firstName} is ${this.age}`
 },
 is18 : function(){
    return this.age >= 18
 }
}
function createUser(firstName,lastName,email,age ,about){
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName
  user.email = email
  user.age = age
  user.about = userMethod.about;
  user.is18 = userMethod.is18;

   return user

}

const user1 = createUser('sid','raawat','salkfd',9)
const user2 = createUser('id','raawat','salkfd',95)
const user3 = createUser('sid+klk','raawat','salkfd',19)

console.log(user1.about());