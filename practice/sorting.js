let a = [9,6,4,33,6,68,8,4]

for(let i = 0; i < a.length ; i++){
    
    for(let j = 0 ; j<a.length-i-1;j++){// 0<8-0-1=7/1<8-1-1=6/2<8-2-1=5
        
        if(a[j+1]< a[j]){// 6 < 9/4 < 9/9<33
            
            [a[j+1], a[j]] =[a[j],a[j+1] ]// 4,9=9,6/
        
        }
        
    }
    
}
console.log(a)
console.log(a[a.length-2])


// //insersion sort
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
      
//         // Start comparing current element with every element before it
//         for (let j = i - 1; j > -1; j--) { //
          
//             // Swap elements as required
//             if (arr[j + 1] < arr[j]) {
//                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//             }
//         }
//     }
//     return arr;
// }
// let b = insertionSort([5,4,6,4,5,7,8,9,1,10,33,22])
// console.log(b)
// console.log(b[b.length-2])
// console.log(b[2])