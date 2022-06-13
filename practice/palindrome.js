// 121 = 123 true
// 123 = 321 false

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

// b = 121


// function z(b){
//     a = ''+b
//     let d = ''
//     let e = ''
//     for(var i = 0; i<a.length; i++){
//         d += a[i]
//     }
//     for (var j = a.length-1; j >= 0; j--) {
//         e += a[j]
//     }
//     console.log(d,e)
//     if(d === e){
//       return  console.log(true)
//     }else{
//       return console.log(false)
//     }
    
// }

// z(b)



// var a = "1232157"
// let i = 0
// let j = a.length - 1
// while(i < a.length && j > 0){

//   i++
//   j--
// }

// if(a[i] !== a[j]){
//   console.log("not plindrome")  
// }else{
//   console.log("plindrome")
// }

//////

var a = "1232551"

let i=0;
let j=a.length-1;

while(i!=j){

if(a[i] === a[j]){
  i++;
  j--;
}else{
  console.log("false");
  break;
}

}

if(i===j){
  console.log("true")
}