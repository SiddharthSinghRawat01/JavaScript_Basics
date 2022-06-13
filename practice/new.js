
let a = ["1->2->3","1->3","4->5->2->8"]
let t = []


// for( let i = 0; i < a.length ; i++){
    
//     t[i] = a[i].split("->")
// }
// console.log(t)

for (let i = 0; i < a.length; i++) {
    let temp = "";
    for(let j = 0; j< a[i].length;j++){
        console.log(a[i][j])
        if(a[i][j] != '-' && a[i][j] != '>'){
            temp +=  a[i][j]
        }
    }
    t.push(temp);
}

console.log(t)
