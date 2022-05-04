// splice method
// start ,delete, insert

const myArray = [1,2,3]

// myArray.splice(1,1);
// console.log(myArray)


// insert
// myArray.splice(1,0,"insert item");
// console.log(myArray)

// show deleted item
const deleteditem = myArray.splice(1,2,"insert item");
console.log(deleteditem)