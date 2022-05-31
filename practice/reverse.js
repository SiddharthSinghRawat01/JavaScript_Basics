// let a = 123 //123/12/1
// let sum = 0 //3/32/
// while(a > 0)
// {
//     let c = a % 10;
//     sum = sum * 10 + c;
//     a = parseInt(a/10)
// }


// console.log(sum)


/////// string
// let a = "12345"
// let b =""
// for( let i = a.length -1 ; i >= 0 ; i--){
//     b += a[i]
// }
// console.log(a.length)
// console.log(a.indexOf(5))
// console.log(b)

// for(let i = a.length-1; i >= 0 ; i--){
//     b+=a[i]
// }
// console.log(b)


///// if a no.is resvres

let n = 426
let sum = 0

while( n != 0 ){
    r = n % 10
    sum = sum * 10 + r
    n = parseInt(n/10)
}

console.log(sum)
