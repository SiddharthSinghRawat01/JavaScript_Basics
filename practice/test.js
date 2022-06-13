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

// let a = [9,6,4,3,3,6,6,8,8,4]
// let c = []
// let j
// for(let i = 0; i<a.length; i++){

//     for( j = 0; j<c.length; j++){
//         if(a[i] === c[j]){
//             break
//         }
//     }

//     if(j === c.length){
//         c.push(a[i])
//     }

// }

// console.log(c)

// let n = "abpiczdpixpigv"
// let a = []
// let b = ''

// for(let i=0; i<n.length; i++){
//     a[i] = n[i]
//     if(a[i]==='p'){
//         a[i] = '3'
//     }
//     if(a[i]==='i'){
//         a[i] = '.14'
//     }
// }
// for(let j=0; j<a.length; j++ ){
    
//     b += a[j]
// }

// console.log(b)


// let a = [1,2,3,4]
// let c = [5,6,7,8,9]
// // let b = [... a,... c]
// // console.log(b)

// a.unshift(... c)
// console.log(c)
// console.log(a)


// function z(a){
//     let sum = 0;
//     let b = a

//     while(a != 0){
//         let r = a % 10
//         sum =sum * 10 + r
//         a = Math.floor(a/10)
//     }
//     console.log(b,sum)
//     if(b === sum){
//         return true
//     }else{
//         return false
//     }

// }


// console.log(z(554))

// console.log(convertToRoman(3210))
// function convertToRoman(num) {
//     var roman = {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1
//     };
//     var str = '';
  
//     for (var i of Object.keys(roman)) {
//       var q = Math.floor(num / roman[i]);
//       num -= q * roman[i];
//       str += i.repeat(q);
//     }
  
//     return str;
//   }

// (function(){
//   var a = b  =8;
// })();


// console.log();

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {console.log(i)}, i * 1000);  
// }

// let x = [1,2,3,4,5]
// let y = [4,1,9,16,25]

// function sq(a,b){
//   let c = []
//   if(a.length !== b.length){
//     console.log('false');
//   }
//   for(let i = 0; i < a.length ; i++){
//     for(let j = 0; j< b.length; j++){
//       if(a[i]*a[i] === y[j]){
//         c.push(a[i])
//       }
//     }  
//   }
//   if(c.length !== a.length){
//     console.log('false');
//   }else{
//     console.log('true');
//   }
//   console.log(c)
// }

// sq(x,y)

// let c = [ 1,2,3,2,1,5,4]
// function duplicate(a){

//   let b =[]
//   for(let i = 0; i<a.length; i++){
    
//     for(j=0; j<b.length;j++){
//         if(b[j] === a[i]){
//             break
//         }
//     }

//     if(j === b.length){
//         b.push(a[i])
//     }  
// }
// return b
// }

// console.log(duplicate(c))

// let a = ["1->2->3","1->3","4->5->2->8"]
// let t = [];


// for (let i = 0; i < a.length; i++) {
//   let temp = ''// don't declare temp outsid everytime loop is running temp become empty
//   const element = a[i];
//   for (let j = 0; j < a[i].length; j++) {
//     const element2 = a[i][j];
//     console.log(element2)
//     if(a[i][j] !=  "-" && a[i][j] !=  ">" ){
//       temp += a[i][j]
//     }
    
//   }
// console.log(temp)
// t.push(temp)
// }

// console.log(t)

// let n = 426
// let sum = 0

// while( n != 0 ){
//     r = n % 10
//     sum = sum * 10 + r
//     n = parseInt(n/10)
// }

// console.log(sum)

