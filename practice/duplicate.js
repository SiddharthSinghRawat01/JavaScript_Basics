let a = [1,1,22,22]
let b = []
let j 
// for(let i = 0; i < a.length; i++){
//     for (j = 0; j< b.length; j++) {
//         if(b[j] === a[i]){
//             break
//         }
//     }
    
//     if( j === b.length){
//         b.push(a[i])
//     }
// }

for(let i = 0; i<a.length; i++){
    
    for(j=0; j<b.length;j++){
        if(b[j] === a[i]){
            break
        }
    }

    if(j === b.length){
        b.push(a[i])
    }  
    
}
console.log(b)
