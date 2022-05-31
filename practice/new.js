
let a = ["1->2->3","1->3","4->5->2->8"]
let m = "3"
let t = []


for( let i = 0; i < a.length ; i++){
    
    t[i] = a[i].split("->")
}
console.log(t)

// let index = []
// for(let j= 0; j< t.length;t++){
//     for(let l= 0; l< t.length;l++){
//         if(t[j][l]===m){
//             index.push(t.indexOf(t[j][l]))
//         }
//     }
// }
// console.log(index)