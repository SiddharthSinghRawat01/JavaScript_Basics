// let n = "abcde"
// let s
// let p = []

// for (let i = 0; i< n.length; i++){
//     let char = n[i]
//     s = [n.slice(0,i) + n.slice(i+1,n.length)]

    
//     p.push(char + s)
// }


// // console.log(p)

// let nums = [2,7,5,7,15]
// let target = 9

// var twoSum = function(nums, target) {
//     let a;
//      for(let i = 0; i<nums.length; i++){
//              if(nums[i]+nums[i+1] === target){
//                  a= [i,i+1]
//          }
//      }
    
//     return a
// };

// console.log(twoSum(nums,target))


// a =[]

// b = 123
// c = 456

// a = [b,c]

// console.log(a)

// o/p [0,2]
// let nums = [3,2,2,3,4]
// let target = 6

// var twoSum = function(nums, target) {
//     let a
//    for (let i = 0; i < nums.length; i++) {

//         for (let j = i+1; j < nums.length; j++) {
            
//             if(nums[i] + nums[j] === target){
//                 a= [i,j]
//             }

//         }
       
//    }
//    return a
// };

// console.log(twoSum(nums,target))

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// var addTwoNumbers = function(l1, l2) {
//     let a = 0
//     let b = 0
//     for(let i =0; i < l1.length;i++  ){
//     a = a *10+ l1[i]
//     }
//     for(let i =0; i < l2.length;i++  ){
//         b = b *10+ l2[i]
//         }

//         let c = a+b
//         console.log(c)
//         let sum = 0
//         let d = []
//         while(c > 0)
//         {
//             let z = c % 10;
//             sum = sum * 10 + z;
//             d = [z].concat(d)
//             c = parseInt(c/10)
//         }

//     return d
// };

// console.log(addTwoNumbers(l1 = [2,4,3], l2 = [5,6,4]))


// let a = [9,6,4,3,3,6,6,8,8,4]

// for (let i = 0; i < a.length; i++){
//     for (let j = i +1; j<a.length;j++){
//         if(a[i] > a[j]){
//             [a[i],a[j]] = [a[j],a[i]]
//         }
//     }
// }

// console.log(a)

let a = [9,6,4,3,3,6,6,8,8,4]
let c = []
let j
for(let i = 0; i<a.length; i++){

    for( j = 0; j<c.length; j++){
        if(a[i] === c[j]){
            break
        }
    }

    if(j === c.length){
        c.push(a[i])
    }

}

console.log(c)