// rest paramerter

// function myFunction(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// myFunction(3,4,5,6,6);
// rest parameter take all parametr in an array
function addAll(...numbers){
    console.log(numbers);
    let total = 0;
    console.log(typeof(numbers));
    for( let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(1,2,3,5,6,7,8,9)
console.log(ans)