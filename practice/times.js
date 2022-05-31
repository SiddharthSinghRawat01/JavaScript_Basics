let a = [2,5,6,4,2,5,5]

a = a.sort()

console.log(a)
let count = 1
var b = []
for (let i = 0; i < a.length; i++) {

    if(a[i] === a[i+1]){
        count += 1
    }else{
        b.push([a[i],count])
        count = 1
    }
    

}
console.log(b)
