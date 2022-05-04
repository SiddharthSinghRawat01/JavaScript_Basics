// find method

// const myArray = ["hello","cat","dog","loin"];

// function isLength(string){
//     return string.length ===3;
// }

// const ans = isLength("hello")
// console.log(ans)

// const ans = myArray.find(isLength);
// console.log(ans);

const users =[
    {userid : 1, userName: "sid"},
    {userid : 2, userName: "ads"},
    {userid : 3, userName: "afsd"},
    {userid : 4, userName: "sifdsd"},
    {userid : 5, userName: " f  fsd"},
]

const ans = users.find((user)=>user.userid === 3);
console.log(ans);